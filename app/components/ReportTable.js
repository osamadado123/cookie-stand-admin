
import { TotalCol } from "../custom_hooks/TotalCol";
export default function ReportTable({ allOutputs }) {
  const hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ];
  const result = TotalCol(allOutputs);
//   console.log(result);
  return (
    <section className=" flex justify-center ">
      {allOutputs.length < 1 ? (
        <div className=" text-center ">
          <h2 className=" text-xl  text-black rounded-3xl border-1 dark:bg-red-700 dark:text-white border-gray-300 bg-red-400 py-4 px-5 shadow-lg">
            No Cookie Stands Available
          </h2>
        </div>
      ) : (
        <table className=" items-center pt-20 pr-48 pb-24 pl-16 gap-24 border-solid my-20 ">
          <thead>
            <tr>
              <th className="text-left p-3 text-xl bg-gray-500 dark:bg-gray-800 text-white border-solid border-2 border-gray-400">
                Location
              </th>
              {hours.map((item) => (
                <th className="text-left p-3 text-xl bg-gray-300 dark:bg-black dark:text-white text-gray-700 border-solid border-2 border-gray-400">
                  {item}
                </th>
              ))}
              <th className="text-left p-3 text-xl bg-gray-400 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-solid border-2 border-gray-400">
                Totals
              </th>
            </tr>
          </thead>
          <tbody>
            {allOutputs.length > 0 &&
              allOutputs.map((item) => {
                return (
                  <tr key={item.keyValue}>
                    <td className="p-3 text-xl text-gray-700 dark:text-gray-200  dark:bg-gray-800 border-solid border-2 border-gray-400">
                      {item._location}
                    </td>
                    {item.hourlySales.map((hour) => (
                      <td className="p-3 text-xl text-gray-700 border-solid border-2 border-gray-400">
                        {hour}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left p-3 text-xl bg-gray-400 dark:bg-gray-700 text-gray-700 dark:text-gray-100 border-solid border-2 border-gray-400">
                Totals
              </td>
              {result.length > 0 &&
                result.map((item) => {
                  return (
                    <td className="text-left p-3 text-xl bg-gray-300 text-gray-700 dark:bg-black dark:text-white  border-solid border-2 border-gray-400">
                      {item}
                    </td>
                  );
                })}
            </tr>
          </tfoot>
        </table>
      )}
    </section>
  );
}