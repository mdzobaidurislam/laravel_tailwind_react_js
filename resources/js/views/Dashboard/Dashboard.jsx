import React from "react";
import Title from "../../components/Title/Title";
import {
    DeleteIcons,
    EditIcons,
    EllipseIcons,
    UserIcons,
} from "../../Icons/Icons";
import Layout from "@/Layouts/Layout";

export default function Dashboard() {
    const data = [
        {
            id: 1,
            brand: "Fiat",
            model: "utilitarian",
            plate: "1111111",
        },
        {
            id: 2,
            brand: "Fiat",
            model: "utilitarian",
            plate: "1111111",
        },
        {
            id: 3,
            brand: "Fiat",
            model: "utilitarian",
            plate: "1111111",
        },
        {
            id: 4,
            brand: "Fiat",
            model: "utilitarian",
            plate: "1111111",
        },
    ];
    return (
        <Layout>
            <Title title="Vehicle Management" />
            <div className="flex justify-between items-center ">
                <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-800 sm:mr-6">
                        <UserIcons />
                        <span class="text-gray-900 text-base font-bold mr-2">
                            6
                        </span>
                        Cars Found
                    </div>
                </div>
                <div className="flex items-center justify-center  ">
                    <span class="block ml-3 shadow-sm rounded-md">
                        <a
                            href="/"
                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-gray-200 border-gray-800 active:bg-gray-800 transition duration-150 ease-in-out"
                        >
                            Providers
                        </a>
                    </span>
                    <span class="block ml-3 shadow-sm rounded-md">
                        <a
                            href="/"
                            class="inline-flex items-center px-4 py-2 border-[#37999f] border-2  text-sm leading-5 font-medium rounded-md  hover:bg-gray-200 hover:text-[#37999f]  bg-[#37999f] text-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                            Add
                        </a>
                    </span>
                </div>
            </div>

            {/* table start  */}

            <div class="flex flex-col container overflow-auto scrollable ">
                <div class="">
                    <div class="py-2 align-middle inline-block min-w-full ">
                        <div class="shadow border-b border-gray-200 ">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Brand
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Model
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Plate
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-end ">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                                {item.brand}
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                                {item.model}
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                                {item.plate}
                                            </td>
                                            <td class=" px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium text-gray-500">
                                                <div class="group relative cursor-pointer">
                                                    <EllipseIcons />
                                                    <div class="hidden group-hover:block p-3 absolute right-0 bg-white shadow  rounded z-50">
                                                        <a
                                                            href="https://cliente.one-step.it/nbt/nbt/edit_dati_mezzi/2"
                                                            class="flex items-center p-1 hover:bg-gray-100 hover:text-gray-700 rounded"
                                                        >
                                                            <EditIcons />
                                                            <span>Edit</span>
                                                        </a>
                                                        <a
                                                            href="https://cliente.one-step.it/nbt/nbt/remove_mezzi/2"
                                                            data-modal=""
                                                            class="flex items-center p-1 hover:bg-gray-100 hover:text-gray-700 rounded"
                                                        >
                                                            <DeleteIcons />
                                                            <span>Delete</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* table end */}
        </Layout>
    );
}
