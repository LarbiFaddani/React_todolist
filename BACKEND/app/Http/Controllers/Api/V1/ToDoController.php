<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreToDoRequest;
use App\Http\Resources\V1\ToDoResource;
use App\Models\ToDo;

class ToDoController extends Controller
{
    public function index() {
        //return response()->json("ToDo Index");
        return ToDoResource::collection(ToDo::all());
    }
    public function show(ToDo $ToDo){
        return new ToDoResource($ToDo);
    }
    public function store(StoreToDoRequest $request) {
        //return response()->json("ToDo Created");
        $validatedData = $request->validated();
        ToDo::create($validatedData);
        return response()->json("ToDo created");
    }
    public function update(StoreToDoRequest $request, ToDo $ToDo){
        $ToDo->update($request->validated());
        return response()->json("ToDo updated");
    }
    public function destroy(ToDo $ToDo){
        $ToDo->delete();
        return response()->json("ToDo deleted");
    }
}
