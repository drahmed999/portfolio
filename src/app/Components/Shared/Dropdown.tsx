// import React, { useState } from 'react';

// interface menu{
//     menuName:string[],
//     menuLink:string[]

// }

// const DropdownMenu:FC<menu>=()=> {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle" onClick={handleDropdownToggle}>
//         Show Menu
//       </button>
//       {isDropdownOpen && (
//         <div className="dropdown-menu">
//           <a href="#">Dentistry</a>
//           <a href="#">Programming</a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;