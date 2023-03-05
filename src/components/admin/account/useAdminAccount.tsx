import React, { useEffect, useState } from 'react'
import { Account } from '../../../utils/types'
import { AccountApi } from './account.api';



const useAdminAccount = () => {
    const [accounts,setAccounts] = useState<Account[]>();
    useEffect(()=>{
        console.log("rerender")
        
      },[])
    useEffect(()=>{
        
        AccountApi.getAllAccounts().then(res => res.data).then(accounts => setAccounts(accounts));
    },[])
    return ({
        accounts
    }
  )
}

export default useAdminAccount