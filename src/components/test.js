//  <Hamburger>
//           <nav
//             className={sidebar ? 'nav-menu active' : 'nav-menu'}
//             onClick={showSidebar}
//           >
//             <XStyle>
//               <Link to='#'>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </XStyle>
//             <ul className='nav-menu-items'>
//               {SidebarData.map((item, index) => {
//                 return (
//                   <li key={index} className={item.cName}>
//                     <Link to={item.path}>
//                       {item.icon}
//                       <h6> {item.title} </h6>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </Hamburger>
//       </IconContext.Provider>
