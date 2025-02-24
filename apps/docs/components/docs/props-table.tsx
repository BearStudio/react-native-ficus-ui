import React from 'react';

interface Property {
  type: string;
  required: boolean;
  defaultValue?: string;
}

interface PropsTableProps {
  description: string;
  prop: Property;
}

const PropsTable: React.FC<PropsTableProps> = ({ description, prop }) => {
  return (
    <div>
      <p className="mb-2 mt-2">{description}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Required
              </th>
              <th scope="col" className="px-6 py-3">
                Default
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 text-center">
              <th
                className="px-6 py-4"
              >
                {prop.type}
              </th>
              <td className="px-6 py-4">{prop.required ? 'Yes' : 'No'}</td>
              <td className="px-6 py-4">{prop.defaultValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropsTable;
