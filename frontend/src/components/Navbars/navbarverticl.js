import React from 'react'

function Navbarverticl() {
  return (
    < >
      <aside
  id="layout-menu"
  className="layout-menu-horizontal menu menu-horizontal container-fluid flex-grow-0 bg-menu-theme"
  data-bg-class="bg-menu-theme"
  style={{
    touchAction: "none",
    userSelect: "none",
    WebkitUserDrag: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }}
>
  <div className="container-xxl d-flex h-100">
    <a href="#" className="menu-horizontal-prev d-none" />
    <div className="menu-horizontal-wrapper">
      <ul className="menu-inner" style={{ marginLeft: 0 }}>
        {/* Dashboards */}
        <li className="menu-item active">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-home-outline" />
            <div data-i18n="Dashboards">Dashboards</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="dashboards-crm.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-chart-donut" />
                <div data-i18n="CRM">CRM</div>
              </a>
            </li>
            <li className="menu-item active">
              <a href="index.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-chart-timeline-variant" />
                <div data-i18n="Analytics">Analytics</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-dashboard.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-cart-outline" />
                <div data-i18n="eCommerce">eCommerce</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-logistics-dashboard.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-truck-outline" />
                <div data-i18n="Logistics">Logistics</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-academy-dashboard.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-notebook-outline" />
                <div data-i18n="Academy">Academy</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Layouts */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-window-maximize" />
            <div data-i18n="Layouts">Layouts</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="layouts-without-menu.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-page-layout-header-footer" />
                <div data-i18n="Without menu">Without menu</div>
              </a>
            </li>
            <li className="menu-item">
              <a
                href="../vertical-menu-template/"
                className="menu-link"
                target="_blank"
              >
                <i className="menu-icon tf-icons mdi mdi-dock-left" />
                <div data-i18n="Vertical">Vertical</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-fluid.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-dock-top" />
                <div data-i18n="Fluid">Fluid</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-container.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-dock-window" />
                <div data-i18n="Container">Container</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="layouts-blank.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-page-layout-body" />
                <div data-i18n="Blank">Blank</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Apps */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-apps" />
            <div data-i18n="Apps">Apps</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-email.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-email-outline" />
                <div data-i18n="Email">Email</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-chat.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-message-outline" />
                <div data-i18n="Chat">Chat</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-calendar.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-calendar-blank-outline" />
                <div data-i18n="Calendar">Calendar</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-kanban.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-view-grid-outline" />
                <div data-i18n="Kanban">Kanban</div>
              </a>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-cart-outline" />
                <div data-i18n="eCommerce">eCommerce</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-ecommerce-dashboard.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Dashboard">Dashboard</div>
                  </a>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Products">Products</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-product-list.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Product List">Product List</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-product-add.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Add Product">Add Product</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-category-list.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Category List">Category List</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Order">Order</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-order-list.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Order List">Order List</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-order-details.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Order Details">Order Details</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Customer">Customer</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-customer-all.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="All Customers">All Customers</div>
                      </a>
                    </li>
                    <li
                      className="menu-item
"
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Customer Details">Customer Details</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-customer-details-overview.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                            <div data-i18n="Overview">Overview</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-customer-details-security.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                            <div data-i18n="Security">Security</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-customer-details-billing.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                            <div data-i18n="Address & Billing">
                              Address &amp; Billing
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-customer-details-notifications.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                            <div data-i18n="Notifications">Notifications</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a
                    href="app-ecommerce-manage-reviews.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Manage Reviews">Manage Reviews</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-referral.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Referrals">Referrals</div>
                  </a>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Settings">Settings</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-settings-detail.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Store Details">Store Details</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-settings-payments.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Payments">Payments</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-settings-checkout.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Checkout">Checkout</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-settings-shipping.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Shipping & Delivery">
                          Shipping &amp; Delivery
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-settings-locations.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Locations">Locations</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-settings-notifications.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Notifications">Notifications</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-notebook-outline" />
                <div data-i18n="Academy">Academy</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-academy-dashboard.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Dashboard">Dashboard</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-academy-course.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="My Course">My Course</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="app-academy-course-details.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Course Details">Course Details</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-truck-outline" />
                <div data-i18n="Logistics">Logistics</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-logistics-dashboard.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Dashboard">Dashboard</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-logistics-fleet.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Fleet">Fleet</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-file-document-outline" />
                <div data-i18n="Invoice">Invoice</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-invoice-list.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="List">List</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-invoice-preview.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Preview">Preview</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-invoice-edit.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Edit">Edit</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-invoice-add.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Add">Add</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-account-outline" />
                <div data-i18n="Users">Users</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-user-list.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="List">List</div>
                  </a>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="View">View</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="app-user-view-account.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Account">Account</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-user-view-security.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Security">Security</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-user-view-billing.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Billing & Plans">
                          Billing &amp; Plans
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-user-view-notifications.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Notifications">Notifications</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-user-view-connections.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Connections">Connections</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-cog-outline" />
                <div data-i18n="Roles & Permissions">
                  Roles &amp; Permissions
                </div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-access-roles.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Roles">Roles</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-access-permission.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Permission">Permission</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        {/* Pages */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-content-paste" />
            <div data-i18n="Pages">Pages</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-flip-to-front" />
                <div data-i18n="Front Pages">Front Pages</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a
                    href="../front-pages/landing-page.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Landing">Landing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="../front-pages/pricing-page.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Pricing">Pricing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="../front-pages/payment-page.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Payment">Payment</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="../front-pages/checkout-page.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Checkout">Checkout</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="../front-pages/help-center-landing.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Help Center">Help Center</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-card-account-details-outline" />
                <div data-i18n="User Profile">User Profile</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="pages-profile-user.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Profile">Profile</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-profile-teams.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Teams">Teams</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="pages-profile-projects.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Projects">Projects</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-profile-connections.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Connections">Connections</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-account-cog-outline" />
                <div data-i18n="Account Settings">Account Settings</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a
                    href="pages-account-settings-account.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Account">Account</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-account-settings-security.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Security">Security</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-account-settings-billing.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-account-settings-notifications.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Notifications">Notifications</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-account-settings-connections.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Connections">Connections</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="pages-faq.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-frequently-asked-questions" />
                <div data-i18n="FAQ">FAQ</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-pricing.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-currency-usd" />
                <div data-i18n="Pricing">Pricing</div>
              </a>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-file-outline" />
                <div data-i18n="Misc">Misc</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a
                    href="pages-misc-error.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Error">Error</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-misc-under-maintenance.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-misc-comingsoon.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Coming Soon">Coming Soon</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-misc-not-authorized.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Not Authorized">Not Authorized</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="pages-misc-server-error.html"
                    className="menu-link"
                    target="_blank"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Server Error">Server Error</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-lock-open-outline" />
                <div data-i18n="Authentications">Authentications</div>
              </a>
              <ul className="menu-sub">
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Login">Login</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-login-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-login-cover.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Register">Register</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-register-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-register-cover.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-register-multisteps.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Multi-steps">Multi-steps</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Verify Email">Verify Email</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-verify-email-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-verify-email-cover.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Reset Password">Reset Password</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-reset-password-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-reset-password-cover.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Forgot Password">Forgot Password</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-forgot-password-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-forgot-password-cover.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Two Steps">Two Steps</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-two-steps-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-two-steps-cover.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Cover">Cover</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-dots-horizontal" />
                <div data-i18n="Wizard Examples">Wizard Examples</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="wizard-ex-checkout.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Checkout">Checkout</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="wizard-ex-property-listing.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Property Listing">Property Listing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="wizard-ex-create-deal.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Create Deal">Create Deal</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="modal-examples.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-open-in-new" />
                <div data-i18n="Modal Examples">Modal Examples</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Components */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-layers-outline" />
            <div data-i18n="Components">Components</div>
          </a>
          <ul className="menu-sub">
            {/* Cards */}
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-credit-card-outline" />
                <div data-i18n="Cards">Cards</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="cards-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Basic">Basic</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-advance.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Advance">Advance</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-statistics.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Statistics">Statistics</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-analytics.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Analytics">Analytics</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-gamifications.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Gamifications">Gamifications</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="cards-actions.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Actions">Actions</div>
                  </a>
                </li>
              </ul>
            </li>
            {/* User interface */}
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-palette-swatch-outline" />
                <div data-i18n="User interface">User interface</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="ui-accordion.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-alerts.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-badges.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Badges">Badges</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-buttons.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Buttons">Buttons</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-carousel.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Carousel">Carousel</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-collapse.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Collapse">Collapse</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-dropdowns.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-footer.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Footer">Footer</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-list-groups.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="List groups">List groups</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-modals.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Modals">Modals</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-navbar.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Navbar">Navbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-offcanvas.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="ui-pagination-breadcrumbs.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Pagination & Breadcrumbs">
                      Pagination &amp; Breadcrumbs
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-progress.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Progress">Progress</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-spinners.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Spinners">Spinners</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tabs-pills.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-toasts.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Toasts">Toasts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-tooltips-popovers.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Tooltips & Popovers">
                      Tooltips &amp; Popovers
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="ui-typography.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Typography">Typography</div>
                  </a>
                </li>
              </ul>
            </li>
            {/* Extended components */}
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-star-outline" />
                <div data-i18n="Extended UI">Extended UI</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="extended-ui-avatar.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Avatar">Avatar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-blockui.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="BlockUI">BlockUI</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="extended-ui-drag-and-drop.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-media-player.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Media Player">Media Player</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="extended-ui-perfect-scrollbar.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Perfect Scrollbar">Perfect Scrollbar</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-star-ratings.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Star Ratings">Star Ratings</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-sweetalert2.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="SweetAlert2">SweetAlert2</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-text-divider.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Text Divider">Text Divider</div>
                  </a>
                </li>
                <li
                  className="menu-item
"
                >
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Timeline">Timeline</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="extended-ui-timeline-basic.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Basic">Basic</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="extended-ui-timeline-fullscreen.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                        <div data-i18n="Fullscreen">Fullscreen</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-tour.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Tour">Tour</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-treeview.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Treeview">Treeview</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="extended-ui-misc.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Miscellaneous">Miscellaneous</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="icons-mdi.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-google-circles-extended" />
                <div data-i18n="Icons">Icons</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Forms */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-checkbox-marked-outline" />
            <div data-i18n="Forms">Forms</div>
          </a>
          <ul className="menu-sub">
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-form-select" />
                <div data-i18n="Form Elements">Form Elements</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="forms-basic-inputs.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Basic Inputs">Basic Inputs</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-input-groups.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Input groups">Input groups</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-custom-options.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Custom Options">Custom Options</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-editors.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Editors">Editors</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-file-upload.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="File Upload">File Upload</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-pickers.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Pickers">Pickers</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-selects.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Select & Tags">Select &amp; Tags</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-sliders.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Sliders">Sliders</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-switches.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Switches">Switches</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="forms-extras.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Extras">Extras</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-cube-outline" />
                <div data-i18n="Form Layouts">Form Layouts</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="form-layouts-vertical.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Vertical Form">Vertical Form</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="form-layouts-horizontal.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Horizontal Form">Horizontal Form</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="form-layouts-sticky.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Sticky Actions">Sticky Actions</div>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-transit-connection-horizontal" />
                <div data-i18n="Form Wizard">Form Wizard</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="form-wizard-numbered.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Numbered">Numbered</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="form-wizard-icons.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Icons">Icons</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="form-validation.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-checkbox-marked-circle-outline" />
                <div data-i18n="Form Validation">Form Validation</div>
              </a>
            </li>
          </ul>
        </li>
        {/* Tables */}
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-table" />
            <div data-i18n="Tables">Tables</div>
          </a>
          <ul className="menu-sub">
            {/* Tables */}
            <li className="menu-item">
              <a href="tables-basic.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-grid-large" />
                <div data-i18n="Tables">Tables</div>
              </a>
            </li>
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-grid" />
                <div data-i18n="Datatables">Datatables</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="tables-datatables-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Basic">Basic</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="tables-datatables-advanced.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Advanced">Advanced</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="tables-datatables-extensions.html"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Extensions">Extensions</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        {/* Charts & Maps */}
        <li
          className="menu-item
"
        >
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons mdi mdi-chart-donut" />
            <div data-i18n="Charts & Maps">Charts &amp; Maps</div>
          </a>
          <ul className="menu-sub">
            <li
              className="menu-item
"
            >
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons mdi mdi-chart-line" />
                <div data-i18n="Charts">Charts</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="charts-apex.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="Apex Charts">Apex Charts</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="charts-chartjs.html" className="menu-link">
                    <i className="menu-icon tf-icons mdi mdi-circle-outline mdi-14px p-1 text-body" />
                    <div data-i18n="ChartJS">ChartJS</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="maps-leaflet.html" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-map-outline" />
                <div data-i18n="Leaflet Maps">Leaflet Maps</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="#" className="menu-horizontal-next d-none" />
  </div>
</aside>

    </ >
  )
}

export default Navbarverticl
