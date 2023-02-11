import React, { useCallback} from "react";
import BirdApi,{Bird} from "../_api/bird/bird.api";
import { toast } from "react-toastify";

const useBird = () => {
 
const createBird = useCallback(async (params:Bird) => {
    const data = await BirdApi.createBird(params)
    if(data.success){
      toast.success(data.message)
    }else {
      toast.error( data.message || "Cannot create new bird! Try again later")
    }
  }, []);

const updateBird = useCallback(async (params:Bird) => {
    const data = await BirdApi.updateBird(params)
    if(data.success){
      toast.success(data.message)
      
    }else {
      toast.error( data.message || "Cannot update bird! Try again later")
    }
  }, []);

const getMyBird = useCallback(async () => {
    const data = await BirdApi.getMyBird();
    if(data.success){
      toast.success(data.message)
      
    }else {
      toast.error( data.message || "Cannot get bird! Try again later")
    }
  }, []);

  return {
    updateBird,
    createBird,
    getMyBird
  };
};
export default useBird;
