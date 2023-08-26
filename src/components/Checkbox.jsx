import React from 'react';
import { Controller } from 'react-hook-form';


const CheckBox = ({ name, label, rules, errors, control, defaultValue, placeholder,id, props }) => {
	return (
		<div className=" flex mt-2 items-center">
			<Controller
				name={name}
				id={id}
				rules={rules}
				control={control}
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value } }) => (
					<input
						id={id}
						name={name}
						type="checkbox"
						className="focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
						border border-gray-400/20 rounded-sm mr-2 text-sm lg:text-base"
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						placeholder={placeholder}
					/>
				)}
			/>
			<label className='text-gray-400/60 text-sm lg:text-base cursor-pointer' htmlFor={label}>{label}</label>

		</div>
	);
};

export default CheckBox;
