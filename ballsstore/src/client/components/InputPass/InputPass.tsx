import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ILogInUserData } from '../../../types';


const InputPass = () => {
   const [precentBar, setPrecentBar] = useState('');
   const [passInputChange, setPassInputChange] = useState('');
   const [passInputClasses, setPassInputClasses] =
       useState('pass-input-passive');
   const [toggleIcon, setToggleIcon] = useState('🙈');
   const [toggleIconClasses, setToggleIconClasses] = useState(
       'toggle-icon-passive'
   );
   const [ripple, setRipple] = useState('');
   const [passLabel, setPassLabel] = useState('Strength');
   const [type, setType] = useState('password');

   const addClass = (className: any) => {
       setPrecentBar('');
       if (className) {
           setPrecentBar(className);
       }
   };

   const handlePassInput = (e: any) => {
       setPassInputChange(e.target.value);
       if (passInputChange.length === 0) {
           setPassLabel('Strength');
           //@ts-ignore
           addClass();
       } else if (passInputChange.length <= 4) {
           setPassLabel('Weak');
           addClass('weak');
       } else if (passInputChange.length <= 7) {
           setPassLabel('Not Bad');
           addClass('average');
       } else {
           setPassLabel('Strong');
           addClass('strong');
       }
   };

   const togglePassInput = (e: any) => {
       if (type === 'password') {
           setType('text');
           setToggleIcon('🙉');
           setRipple('ripple-active');
           setPassInputClasses('pass-input-active');
           setToggleIconClasses('toggle-icon-active');
       } else {
           setType('password');
           setToggleIcon('🙈');
           setRipple('ripple-passive');
           setPassInputClasses('pass-input-passive');
           setToggleIconClasses('toggle-icon-passive');
       }
   };
	const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<ILogInUserData>({	defaultValues: {}	});

   return (
      <div className='input-pass'>
            <div className='input-container'>
                <div className='input-group'>
                    <input
                        type={type}
                        className={passInputClasses}
                        value={passInputChange}
                        {...register('password', { required: true })}
					    placeholder="Your password"
					    autoComplete="off"
                        onChange={handlePassInput}
                    />
                    <span
                        onClick={togglePassInput}
                        className={`toggle ${toggleIconClasses}`}
                    >
                        {toggleIcon}
                    </span>
                    <span className={`ripple ${ripple}`}></span>
                </div>
                <div className='pass-strength'>
                    <div className='strength-percent'>
                        <span className={precentBar}></span>
                    </div>
                    <span className='strength-label'>{passLabel}</span>
                </div>
            </div>
        </div>
   );
};

export default InputPass;