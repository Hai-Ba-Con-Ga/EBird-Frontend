import React from 'react'
import useAuth from '../../../auth/useAuth'

type Props = {}

const useBird = (props: Props) => {
    const {auth:{userInfomation}} = useAuth()
    const createNewBird = useCallback(()=>{
        if (!userInfomation) return;
        
    },[userInfomation]);
    return (

    )
}

export default useBird