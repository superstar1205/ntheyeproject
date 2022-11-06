
import React, { Fragment, useState, useEffect } from "react";
import { MENUITEMS } from "./SideMenu";
import Scrollbars from "react-custom-scrollbars";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
let history:any = [];

const Sidebar = () => {
  let location = useLocation();
  const [menuitems, setMenuitems]:any = useState(MENUITEMS);
  // initial loading
  useEffect(() => {

    history.push(location.pathname);  // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history       
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
      setSidemenu();
    }
    let mainContent:any = document.querySelector('.main-content');

    //when we click on the body to remove
    mainContent.addEventListener('click', mainContentClickFn);
    return () => {
      mainContent.removeEventListener('click', mainContentClickFn);
    }
  },[location])

  // location
  useEffect(() => {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }, []);

  //  In Horizontal When we click the body it should we Closed using in useEfffect Refer line No:16
  function mainContentClickFn() {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }
  //<-------End---->
  function clearMenuActive() {
    console.log('clear');
    MENUITEMS.map((mainlevel:any) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel:any) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.map((sublevel1:any) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2:any) => {
                  sublevel2.active = false;
                  if (sublevel2.children) {
                    sublevel2.children.map((sublevel3:any) => {
                      sublevel3.active = false;
                      return sublevel3;
                    })
                  }
                  return sublevel2;
                })
              }
              return sublevel1;
            })
          }
          return sublevel;
        })
      }
      return mainlevel;
    })
    setMenuitems((arr:any) => [...arr]);
  }
  function setSidemenu() {
    if (menuitems) {
      menuitems.map((mainlevel:any) => {
        if (mainlevel.Items) {
          mainlevel.Items.map((items:any) => {
            items.active = false;
            items.selected = false;
            if (location.pathname === '/nowa/preview/' || location.pathname === '/nowa/preview/') {
              location.pathname = '/nowa/preview/dashboard/dashboard-1/';
            }
            if (location.pathname === items.path + '/') {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.map((submenu:any) => {
                submenu.active = false;
                submenu.selected = false;
                if (location.pathname === submenu.path + '/') {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.children) {
                  submenu.children.map((submenu1:any) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (location.pathname === submenu1.path + '/') {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  })
                }
                return submenu;
              })
            }
            return items;
          })
        }
        setMenuitems((arr:any) => [...arr]);
        return mainlevel;
      })
    }
  }
  function toggleSidemenu(item:any) {
    
      if (
        !document.body.classList.contains("horizontalmenu-hover") ||
        window.innerWidth < 992
      )
  {
      // To show/hide the menu
      if (!item.active) {
        menuitems.map((mainlevel:any) => {
          if (mainlevel.Items) {
            mainlevel.Items.map((sublevel:any) => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.map((sublevel1:any) => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.map((sublevel2:any) => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
                      if (sublevel2.children) {
                        sublevel2.children.map((sublevel3:any) => {
                          sublevel3.active = false;
                          if (item === sublevel3) {
                            sublevel.active = true;
                            sublevel1.active = true;
                            sublevel2.active = true;
                            sublevel3.active = true;
                          }
                          return sublevel2;
                        })
                      }
                      return sublevel2;
                    })
                  }
                  return sublevel1;
                })
              }
              return sublevel;
            })
          }
          return mainlevel;
        })
      }
      else {
        item.active = !item.active;
      }
    }

    setMenuitems((arr:any) => [...arr]);
  }
 
  //Hover effect
  function Onhover() {
    if (document.querySelector(".app")) {
      if (document.querySelector(".app")?.classList.contains("sidenav-toggled"))
        document.querySelector(".app")?.classList.add("sidenav-toggled-open");
    }
  }
  function Outhover() {
    if (document.querySelector(".app")) {
      document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
    }
  }


  return (
  <>
    <div className="sticky">
      <aside
        className="app-sidebar "
        onMouseOver={() => Onhover()}
        onMouseOut={() => Outhover()}
      >
        <Scrollbars
          className="hor-scroll"
          style={{ position: "absolute" }}
        >
          <div className="main-sidebar-header active">
            <NavLink className="header-logo active" to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`}>
              <img
                src={require("../../assets/img/brand/logo.png")}
                className="main-logo  desktop-logo"
                alt="logo"
              />
              <img
                src={require("../../assets/img/brand/logo-white.png")}
                className="main-logo  desktop-dark"
                alt="logo"
              />
              <img
                src={require("../../assets/img/brand/favicon.png")}
                className="main-logo  mobile-logo"
                alt="logo"
              />
              <img
                src={require("../../assets/img/brand/favicon-white.png")}
                className="main-logo  mobile-dark"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="main-sidemenu">
            <div className="slide-left disabled" id="slide-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
              </svg>
            </div>

            <ul className="side-menu">
              {menuitems.map((Item:any, itemi:any) => (
                <Fragment key={itemi + Math.random() * 100}>
                  <li className="side-item side-item-category">{Item.menutitle}</li>
                  {Item.Items.map((menuItem:any, i:any) => (
                    <li className={`slide ${menuItem.selected ? "is-expanded" : ""}  ${menuItem.active ? "is-expanded" : ""}`} key={i}>
                      {menuItem.type === "link" ? (
                        <NavLink to={menuItem.path + "/"} className={`side-menu__item ${menuItem.selected ? " active" : ""}`}
                        >
                          {menuItem.icon}
                          <span className="side-menu__label">
                            {menuItem.title}
                          </span>
                          {menuItem.badge ? (
                            <label className={menuItem.badge}>
                              {menuItem.badgetxt}
                            </label>
                          ) : (
                            ""
                          )}
                        </NavLink>
                      ) : (
                        ""
                      )}
                      {menuItem.type === "sub" ? (
                        <a href="javascript" onClick={(event) => {
                          event.preventDefault();
                          toggleSidemenu(menuItem);
                        }} className={`side-menu__item ${menuItem.selected ? "active is-expanded" : ""}`}>
                          {menuItem.icon}
                          <span className="side-menu__label">{menuItem.title}{menuItem.active}</span>
                          {menuItem.badge ? (
                            <label className={`${menuItem.badge} side-badge`}>
                              {menuItem.badgetxt}
                            </label>
                          ) : (
                            ""
                          )}
                          <i className="angle fe fe-chevron-right"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {menuItem.children ? (
                        <ul className={`slide-menu ${menuItem.active ? "open" : ""}`}
                          style={
                            menuItem.active
                              ? { display: "block" }
                              : { display: "none" }
                          }>
                          {menuItem.children.map((childrenItem:any, index:any) => {
                            return (
                              <li key={index} className={`sub-slide ${childrenItem.selected ? "is-expanded" : ""} ${childrenItem.active ? "is-expanded" : ""}`}>
                                {childrenItem.type === "sub" ? (
                                  <a href="javascript"
                                    className={`slide-item ${childrenItem.selected ? "active is-expanded" : ""}`}
                                    onClick={(event) => { event.preventDefault(); toggleSidemenu(childrenItem); }}
                                  >
                                    <span className="sub-side-menu__label">{childrenItem.title}{childrenItem.active}</span>

                                    <i className="sub-angle fe fe-chevron-right"></i>
                                  </a>
                                ) : (
                                  ""
                                )}
                                {childrenItem.type === "link" ? (
                                  <span >
                                    <NavLink
                                      to={childrenItem.path + "/"}
                                      className="slide-item"
                                    >
                                      {childrenItem.title}{childrenItem.active}
                                    </NavLink>
                                  </span>
                                ) : (
                                  ""
                                )}
                                {childrenItem.children ? (
                                  <ul className={`sub-slide-menu ${childrenItem.selected ? "open" : ""}`}
                                    style={
                                      childrenItem.active
                                        ? { display: "block" }
                                        : { display: "none" }
                                    }>
                                    {childrenItem.children.map(
                                      (childrenSubItem:any, key:any) => (
                                        <li key={key}>
                                          {childrenSubItem.type === "link" ? (
                                            <NavLink
                                              to={childrenSubItem.path + "/"}
                                              className="sub-side-menu__item"
                                            >
                                              <span className="sub-side-menu__label">{childrenSubItem.title}{childrenSubItem.active}</span>
                                            </NavLink>
                                          ) : (
                                            ""
                                          )}
                                          {childrenSubItem.type === "sub" ? (
                                            <span  className={`sub-slide2 ${childrenSubItem.selected ? "is-expanded" : ""} ${childrenSubItem.active ? "is-expanded" : ""}`}>
                                              <NavLink
                                                to="#"
                                                className="sub-side-menu__item"
                                                onClick={(event) => {
                                                  event.preventDefault();
                                                  toggleSidemenu(childrenSubItem)
                                                }}
                                              >
                                                <span className="sub-side-menu__label">
                                                  {childrenSubItem.title}{childrenSubItem.active}
                                                </span>
                                                <i className="sub-angle2 fe fe-chevron-down"></i>
                                              </NavLink>
                                              {childrenItem.children.map(
                                                (childrenSubItemsub:any, key:any) => (
                                                  <ul key={key} className={`sub-slide-menu1 ${childrenSubItemsub.selected ? "open" : ""}`}
                                                    style={
                                                      childrenSubItemsub.active
                                                        ? { display: "block" }
                                                        : { display: "none" }
                                                    }
                                                  >
                                                    {childrenItem.children.map(
                                                      (childrenSubItemsubs:any, key:any) => (
                                                        <li key={key}>
                                                          <NavLink className="sub-slide-item2" to="#">{childrenSubItemsubs.title}{childrenSubItemsubs.active}</NavLink>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                )
                                              )}
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                ) : (
                                  ""
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
            <div className="slide-right" id="slide-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
              </svg>
            </div>

          </div>
        </Scrollbars>
      </aside>
    </div>
    </>
  );
}

Sidebar.propTypes = {};

Sidebar.defaultProps = {};
export default Sidebar;




