import {useRecoilState} from "recoil";
import commonAtom from "./commonAtom";
import {useCallback} from "react";
const useCommon = () => {
	const [common,setCommon] = useRecoilState(commonAtom)
	const changeCurrentBird = useCallback((bird:any)=>{
		setCommon({...common,currentBird: bird});
	},[common])
	return {
		changeCurrentBird,
	}
}
export default useCommon;
