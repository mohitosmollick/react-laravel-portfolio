<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Client;
use App\Models\Product;
use App\Models\Service;

use Carbon\Carbon;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rules\Password;



class ApiController extends Controller
{

    function categories()
    {
        $category = Category::orderBy('id', 'asc')->get([
            'id',
            'user_id',
            'category_name',
            'category_slug',
            'created_at',
        ]);
        return response()->json($category);
    }

    function services()
    {
        $service = Service::orderBy('id', 'asc')->get();
        return response()->json($service);
    }

    function clients()
    {
        $clients = Client::orderBy('id', 'desc')->get();
        return response()->json($clients);
    }

    function Products()
    {
        $posts = Product::get();
        return response()->json($posts);

    }

//    Client controller

    function clientRegister(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => [
                'required',
                password::min(5)
            ],
        ]);


        if (Client::insert([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'created_at' => Carbon::now(),
        ])) {
            return response()->json([
                'message' => 'Register Successfully!!'
            ]);
        } else {
            return response()->json([
                'message' => 'Failed to Register !!'
            ]);
        }
    }


    function clientLogin(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');
        $user = Client::where('email', '=', $email)->first();


        if (!$user) {
            return back()->with('error', 'Login Fail, please check email id');
        } else {
            if (Hash::check($password, $user->password)) {

                $access_token = \Auth::JWT($user);
                Session::put('Authorization', $access_token);

                Session::put('id', $user->id);
                Session::put('email', $user->email);
                Session::put('name', $user->name);

                return response()->json([
                    'message' => 'Login Successfully!!',
                    'id'=>$user->id,
                    'email'=>$user->email,
                    'name'=>$user->name,
                    'photo'=>$user->photo
                ]);
            } else {
                return response()->json([
                    'message' => 'User or Pass Does not match'
                ]);

            }
        }
    }

    function customerLogout()
    {
      \Auth::logout();
      return 1;
    }


    function updateProfileImage(Request $request){
//        $request->validate([
//            //'name' => 'required',
//            'profile_img' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//        ]);

        $image=$request->file('image');
      //  $slug=Str::slug($request->name);
        $slug="00";
        $user=Client::where('id',$request->id)->first();
        if ($user->photo=="default.png") {
            $imageName='uploads/profile/'.\FileHandler::nameGenerate($slug,$image);
            \FileHandler::imageResize($image,500,500,$imageName);
        } else  {
             $imageName='uploads/profile/'.\FileHandler::nameGenerate($slug,$image);
            \FileHandler::fileDelete($user->photo,'uploads/profile/');
            \FileHandler::imageResize($image,500,500,$imageName);
        }
        Client::where('id',$request->id)->update([
            'name'=>$request->name,
            'photo'=>\FileHandler::ServerURL($imageName),
        ]);
        return response()->json(["message"=> "Profile Successfully Updated"]);

    }
}
