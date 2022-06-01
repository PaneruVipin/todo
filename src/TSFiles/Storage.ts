export const storeData=(key:string, data:any)=>{
    const saveStorage= localStorage.setItem(key, JSON.stringify(data));
     return saveStorage;
   }
   export const useStoreData = (key:any) =>{
       const getStorage:any=localStorage.getItem(key)
     const useStorage = JSON.parse(getStorage);
     return useStorage;
   }
   