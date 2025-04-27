import React from 'react';

const ListItem = ({
  title,
  description,
  inputType,
  value,
  onChange,
  placeholder,
  isDarkMode,
  options
}) => {
  const inputClassName = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';

  return (
    <li className="flex justify-between items-center">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="w-1/2">
        <p className="text-gray-400">{description}</p>
        <div className="mt-2 relative">
          {inputType === 'text' && (
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={`w-full p-2 rounded-md ${inputClassName}`}
            />
          )}
          {inputType === 'select' && (
            <select
              value={value}
              onChange={onChange}
              className={`w-full p-2 rounded-md ${inputClassName}`}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </li>
  );
};

export default ListItem;