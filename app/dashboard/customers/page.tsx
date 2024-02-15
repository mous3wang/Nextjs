import { Suspense } from "react";
import { fetchFilteredCustomers } from "../../lib/data";
import CustomersTable from "../../ui/customers/table";
import { lusitana } from "../../ui/fonts";
import Search from "../../ui/search";


export default async function Page({
    searchParams,
}:{
    searchParams?:{
        query?:string
    }
}) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return (
        <div className="w-full">        
            <CustomersTable customers={customers} />            
        </div>
    )
}