<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmptyResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmptyResource::collection(Order::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info($request);
        $company = Order::create([
            'client_name' => $request->client_name,
            'date' => $request->date,
            'case_code' => $request->case_code,
            'phone' => $request->phone,
            'adults' => $request->adults,
            'children' => $request->children,
            'infants' => $request->infants,
            'city' => $request->city,
            'agent_id' => $request->agent_id,
            'notes' => $request->notes
        ]);
        return true;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return $id;
        $order = Order::where('id', $id)->get();
        return  EmptyResource::collection($order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $order = Order::where('id', $id);
        $order->update([
            'client_name' => $request->client_name,
            'date' => $request->date,
            'case_code' => $request->case_code,
            'phone' => $request->phone,
            'adults' => $request->adults,
            'children' => $request->children,
            'infants' => $request->infants,
            'city' => $request->city,
            'agent_id' => $request->agent_id,
            'notes' => $request->notes
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Log::info("sdfjlkgjlksfdlksadlkfdsa");
        Order::where('id', $id)->delete();
        return response()->noContent();
    }
}
