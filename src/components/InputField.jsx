import React from 'react';
import { useForm, Controller } from 'react-hook-form';


const InputField = ({ name, label, rules, errors, control, defaultValue, type, placeholder,icon }) => {
	return (
		<div className="w-full flex flex-col mt-2 mr-2">

			<label className='text-gray-400/60 lg:text-lg text-sm' htmlFor={name}>{label}</label>
			<Controller
				name={name}
				rules={rules}
				control={control}
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value } }) => (
					<div className='relative group w-full'>
						<div className='absolute left-0  absolute inset-y-0 left-0 flex items-center
							rounded-md transition-all duration-500 ease-in-out text-yellow-500/40 p-0.5'>
							{icon}
						</div>
						<input
							id={name}
							type={type}
							className="block border-none ring-1 ring-blue-500/10 focus:ring-1 focus:ring-blue-500/10
									focus:border-l-4 focus:border-2 rounded-md shadow w-full pl-8"
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							placeholder={placeholder}
						/>

					</div>
				)}
			/>
			{errors[name] && <span className="text-red-500 italic">{errors[name].message}</span>}
		</div>
	);
};

export default InputField;
