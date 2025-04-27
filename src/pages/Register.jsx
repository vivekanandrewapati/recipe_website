// // import React, { useState } from 'react';

// // function Register() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Call API or perform register logic here
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match');
// //     } else {
// //       // Register successful, redirect to login or perform other action
// //       console.log('Register successful!');
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex justify-center items-center bg-gray-100">
// //       <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
// //         <h2 className="text-3xl font-bold mb-4">Register</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label className="block mb-2">
// //             <span className="text-gray-700">Name</span>
// //             <input
// //               type="text"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className="w-full p-2 pl-10 text-sm text-gray-700"
// //               placeholder="Enter your name"
// //             />
// //           </label>
// //           <label className="block mb-2">
// //             <span className="text-gray-700">Email</span>
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full p-2 pl-10 text-sm text-gray-700"
// //               placeholder="Enter your email"
// //             />
// //           </label>
// //           <label className="block mb-2">
// //             <span className="text-gray-700">Password</span>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full p-2 pl-10 text-sm text-gray-700"
// //               placeholder="Enter your password"
// //             />
// //           </label>
// //           <label className="block mb-2">
// //             <span className="text-gray-700">Confirm Password</span>
// //             <input
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               className="w-full p-2 pl-10 text-sm text-gray-700"
// //               placeholder="Confirm your password"
// //             />
// //           </label>
// //           {error && (
// //             <div className="text-red-500 text-sm mb-2">{error}</div>
// //           )}
// //           <button
// //             type="submit"
// //             className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
// //           >
// //             Register
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     username: '',
//     password: '',
//     avatar: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === 'avatar') {
//       setFormData({ ...formData, avatar: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/api/v1/users/register', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         withCredentials: true
//       });

//       if (response.data.success) {
//         // Registration successful, redirect to login page
//         navigate('/login');
//       } else {
//         setError('Registration failed. Please try again.');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create your account
//           </h2>
//         </div>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//             <span className="block sm:inline">{error}</span>
//           </div>
//         )}
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" value="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="full-name" className="sr-only">
//                 Full Name
//               </label>
//               <input
//                 id="full-name"
//                 name="fullName"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="avatar" className="sr-only">
//                 Avatar
//               </label>
//               <input
//                 id="avatar"
//                 name="avatar"
//                 type="file"
//                 accept="image/*"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               disabled={loading}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </div>
//         </form>
//         <div className="text-center">
//           <p className="mt-2 text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Sign in here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;