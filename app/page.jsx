"use client";
import CreateForm from "./components/CreateForm";
import ReportTable from "./components/ReportTable";
import { useState, useContext} from "react";
import { removeDuplicates } from "./custom_hooks/TotalCol";
import LoginForm from './components/LoginForm';
import { AuthContext } from "./contexts/auth";

export default function Home() {

  const [allOutputs, setAllOutputs] = useState([]);
  const [keyValue, setKeyValue] = useState(0);

  function getUserInput(userInput) {
    setKeyValue(keyValue + 1);
    const output = {
      key: keyValue,
      _location: userInput._location,
      hourlySales: userInput.hourlySales ,
    };
    setAllOutputs([...allOutputs, output]);
  }
  let Locations=removeDuplicates(allOutputs)
  const { tokens } = useContext(AuthContext);

  return (
    <>
    {tokens ? 
    <main className="flex-1 overflow-y-auto p-20">
        <CreateForm getUserInput={getUserInput} />
        <ReportTable allOutputs={allOutputs} />
      <div className=" text-center">
        <p className="text-2xl  text-gray-500  py-4 px-5 ">
          {Locations.length > 0 ? `${Locations.length} Locations world wide` : '0 Location world wide'}
        </p>
      </div>
    </main>
      : <LoginForm />
       }
    </>
  );
}