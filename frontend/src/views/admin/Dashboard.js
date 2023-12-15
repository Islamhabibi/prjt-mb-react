import React from 'react'
import FooterAdmin from '../../components/Footers/FooterAdmin'
import AdminNavbar from '../../components/Navbars/AdminNavbar'
import Navbar from '../../components/Navbars/Navbar'

function Dashboard() {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <AdminNavbar/>
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
      <Navbar/>
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row gy-4">
            {/* Congratulations card */}
            <div className="col-md-12 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-1">Congratulations John! 🎉</h4>
                  <p className="pb-0">Best seller of the month</p>
                  <h4 className="text-primary mb-1">$42.8k</h4>
                  <p className="mb-2 pb-1">78% of target 🚀</p>
                  <a href="javascript:;" className="btn btn-sm btn-primary">
                    View Sales
                  </a>
                </div>
                <img
                  src="../assets/img/icons/misc/triangle-light.png"
                  className="scaleX-n1-rtl position-absolute bottom-0 end-0"
                  width={166}
                  alt="triangle background"
                  data-app-light-img="icons/misc/triangle-light.png"
                  data-app-dark-img="icons/misc/triangle-dark.png"
                />
                <img
                  src="../assets/img/illustrations/trophy.png"
                  className="scaleX-n1-rtl position-absolute bottom-0 end-0 me-4 mb-4 pb-2"
                  width={83}
                  alt="view sales"
                />
              </div>
            </div>
            {/*/ Congratulations card */}
            {/* Transactions */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Transactions</h5>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="transactionID"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical mdi-24px" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="transactionID"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Refresh
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Share
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Update
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">
                    <span className="fw-medium">Total 48.5% growth</span> 😎
                    this month
                  </p>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <div className="avatar-initial bg-primary rounded shadow">
                            <i className="mdi mdi-trending-up mdi-24px" />
                          </div>
                        </div>
                        <div className="ms-3">
                          <div className="small mb-1">Sales</div>
                          <h5 className="mb-0">245k</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <div className="avatar-initial bg-success rounded shadow">
                            <i className="mdi mdi-account-outline mdi-24px" />
                          </div>
                        </div>
                        <div className="ms-3">
                          <div className="small mb-1">Customers</div>
                          <h5 className="mb-0">12.5k</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <div className="avatar-initial bg-warning rounded shadow">
                            <i className="mdi mdi-cellphone-link mdi-24px" />
                          </div>
                        </div>
                        <div className="ms-3">
                          <div className="small mb-1">Product</div>
                          <h5 className="mb-0">1.54k</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <div className="avatar-initial bg-info rounded shadow">
                            <i className="mdi mdi-currency-usd mdi-24px" />
                          </div>
                        </div>
                        <div className="ms-3">
                          <div className="small mb-1">Revenue</div>
                          <h5 className="mb-0">$88k</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Transactions */}
            {/* Weekly Overview Chart */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Weekly Overview</h5>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="weeklyOverviewDropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical mdi-24px" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="weeklyOverviewDropdown"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Refresh
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Share
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Update
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="weeklyOverviewChart" />
                  <div className="mt-1 mt-md-3">
                    <div className="d-flex align-items-center gap-3">
                      <h3 className="mb-0">45%</h3>
                      <p className="mb-0">
                        Your sales performance is 45% 😎 better compared to last
                        month
                      </p>
                    </div>
                    <div className="d-grid mt-3 mt-md-4">
                      <button className="btn btn-primary" type="button">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Weekly Overview Chart */}
            {/* Total Earnings */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">Total Earning</h5>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="totalEarnings"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical mdi-24px" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="totalEarnings"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 28 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="mb-3 mt-md-3 mb-md-5">
                    <div className="d-flex align-items-center">
                      <h2 className="mb-0">$24,895</h2>
                      <span className="text-success ms-2 fw-medium">
                        <i className="mdi mdi-menu-up mdi-24px" />
                        <small>10%</small>
                      </span>
                    </div>
                    <small className="mt-1">
                      Compared to $84,325 last year
                    </small>
                  </div>
                  <ul className="p-0 m-0">
                    <li className="d-flex mb-4 pb-md-2">
                      <div className="avatar flex-shrink-0 me-3">
                        <img
                          src="../assets/img/icons/misc/zipcar.png"
                          alt="zipcar"
                          className="rounded"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Zipcar</h6>
                          <small>Vuejs, React &amp; HTML</small>
                        </div>
                        <div>
                          <h6 className="mb-2">$24,895.65</h6>
                          <div
                            className="progress bg-label-primary"
                            style={{ height: 4 }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "75%" }}
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-md-2">
                      <div className="avatar flex-shrink-0 me-3">
                        <img
                          src="../assets/img/icons/misc/bitbank.png"
                          alt="bitbank"
                          className="rounded"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Bitbank</h6>
                          <small>Sketch, Figma &amp; XD</small>
                        </div>
                        <div>
                          <h6 className="mb-2">$8,6500.20</h6>
                          <div
                            className="progress bg-label-info"
                            style={{ height: 4 }}
                          >
                            <div
                              className="progress-bar bg-info"
                              style={{ width: "75%" }}
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-md-3">
                      <div className="avatar flex-shrink-0 me-3">
                        <img
                          src="../assets/img/icons/misc/aviato.png"
                          alt="aviato"
                          className="rounded"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Aviato</h6>
                          <small>HTML &amp; Angular</small>
                        </div>
                        <div>
                          <h6 className="mb-2">$1,2450.80</h6>
                          <div
                            className="progress bg-label-secondary"
                            style={{ height: 4 }}
                          >
                            <div
                              className="progress-bar bg-secondary"
                              style={{ width: "75%" }}
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*/ Total Earnings */}
            {/* Four Cards */}
            <div className="col-xl-4 col-md-6">
              <div className="row gy-4">
                {/* Total Profit line chart */}
                <div className="col-sm-6">
                  <div className="card h-100">
                    <div className="card-header pb-0">
                      <h4 className="mb-0">$86.4k</h4>
                    </div>
                    <div className="card-body">
                      <div id="totalProfitLineChart" className="mb-3" />
                      <h6 className="text-center mb-0">Total Profit</h6>
                    </div>
                  </div>
                </div>
                {/*/ Total Profit line chart */}
                {/* Total Profit Weekly Project */}
                <div className="col-sm-6">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <div className="avatar">
                        <div className="avatar-initial bg-secondary rounded-circle shadow">
                          <i className="mdi mdi-poll mdi-24px" />
                        </div>
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="totalProfitID"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical mdi-24px" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="totalProfitID"
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Refresh
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Share
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body mt-mg-1">
                      <h6 className="mb-2">Total Profit</h6>
                      <div className="d-flex flex-wrap align-items-center mb-2 pb-1">
                        <h4 className="mb-0 me-2">$25.6k</h4>
                        <small className="text-success mt-1">+42%</small>
                      </div>
                      <small>Weekly Project</small>
                    </div>
                  </div>
                </div>
                {/*/ Total Profit Weekly Project */}
                {/* New Yearly Project */}
                <div className="col-sm-6">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <div className="avatar">
                        <div className="avatar-initial bg-primary rounded-circle shadow-sm">
                          <i className="mdi mdi-wallet-travel mdi-24px" />
                        </div>
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="newProjectID"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical mdi-24px" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="newProjectID"
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Refresh
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Share
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body mt-mg-1">
                      <h6 className="mb-2">New Project</h6>
                      <div className="d-flex flex-wrap align-items-center mb-2 pb-1">
                        <h4 className="mb-0 me-2">862</h4>
                        <small className="text-danger mt-1">-18%</small>
                      </div>
                      <small>Yearly Project</small>
                    </div>
                  </div>
                </div>
                {/*/ New Yearly Project */}
                {/* Sessions chart */}
                <div className="col-sm-6">
                  <div className="card h-100">
                    <div className="card-header pb-0">
                      <h4 className="mb-0">2,856</h4>
                    </div>
                    <div className="card-body">
                      <div id="sessionsColumnChart" className="mb-3" />
                      <h6 className="text-center mb-0">Sessions</h6>
                    </div>
                  </div>
                </div>
                {/*/ Sessions chart */}
              </div>
            </div>
            {/*/ Total Earning */}
            {/* Sales by Countries */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">Sales by Countries</h5>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="saleStatus"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical mdi-24px" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="saleStatus"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 28 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <div className="avatar-initial bg-label-success rounded-circle">
                          US
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0">$8,656k</h6>
                          <i className="mdi mdi-chevron-up mdi-24px text-success" />
                          <small className="text-success">25.8%</small>
                        </div>
                        <small>United states of america</small>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-0">894k</h6>
                      <small>Sales</small>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <span className="avatar-initial bg-label-danger rounded-circle">
                          UK
                        </span>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0">$2,415k</h6>
                          <i className="mdi mdi-chevron-down mdi-24px text-danger" />
                          <small className="text-danger">6.2%</small>
                        </div>
                        <small>United Kingdom</small>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-0">645k</h6>
                      <small>Sales</small>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <span className="avatar-initial bg-label-warning rounded-circle">
                          IN
                        </span>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0">865k</h6>
                          <i className="mdi mdi-chevron-up mdi-24px text-success" />
                          <small className="text-success"> 12.4%</small>
                        </div>
                        <small>India</small>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-0">148k</h6>
                      <small>Sales</small>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <span className="avatar-initial bg-label-secondary rounded-circle">
                          JA
                        </span>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0">$745k</h6>
                          <i className="mdi mdi-chevron-down mdi-24px text-danger" />
                          <small className="text-danger">11.9%</small>
                        </div>
                        <small>Japan</small>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-0">86k</h6>
                      <small>Sales</small>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <span className="avatar-initial bg-label-danger rounded-circle">
                          KO
                        </span>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0">$45k</h6>
                          <i className="mdi mdi-chevron-up mdi-24px text-success" />
                          <small className="text-success">16.2%</small>
                        </div>
                        <small>Korea</small>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-0">42k</h6>
                      <small>Sales</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Sales by Countries */}
            {/* Deposit / Withdraw */}
            <div className="col-xl-8">
              <div className="card h-100">
                <div className="card-body row g-2">
                  <div className="col-12 col-md-6 card-separator pe-0 pe-md-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                      <h5 className="m-0 me-2">Deposit</h5>
                      <a className="fw-medium" href="javascript:void(0);">
                        View all
                      </a>
                    </div>
                    <div className="pt-2">
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/payments/gumroad.png"
                              className="img-fluid"
                              alt="gumroad"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Gumroad Account</h6>
                              <small>Sell UI Kit</small>
                            </div>
                            <h6 className="text-success mb-0">+$4,650</h6>
                          </div>
                        </li>
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/payments/mastercard-2.png"
                              className="img-fluid"
                              alt="mastercard"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Mastercard</h6>
                              <small>Wallet deposit</small>
                            </div>
                            <h6 className="text-success mb-0">+$92,705</h6>
                          </div>
                        </li>
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/payments/stripes.png"
                              className="img-fluid"
                              alt="stripes"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Stripe Account</h6>
                              <small>iOS Application</small>
                            </div>
                            <h6 className="text-success mb-0">+$957</h6>
                          </div>
                        </li>
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/payments/american-bank.png"
                              className="img-fluid"
                              alt="american"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">American Bank</h6>
                              <small>Bank Transfer</small>
                            </div>
                            <h6 className="text-success mb-0">+$6,837</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/payments/citi.png"
                              className="img-fluid"
                              alt="citi"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Bank Account</h6>
                              <small>Wallet deposit</small>
                            </div>
                            <h6 className="text-success mb-0">+$446</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 ps-0 ps-md-3 mt-3 mt-md-2">
                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                      <h5 className="m-0 me-2">Withdraw</h5>
                      <a className="fw-medium" href="javascript:void(0);">
                        View all
                      </a>
                    </div>
                    <div className="pt-2">
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/brands/google.png"
                              className="img-fluid"
                              alt="google"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Google Adsense</h6>
                              <small>Paypal deposit</small>
                            </div>
                            <h6 className="text-danger mb-0">-$145</h6>
                          </div>
                        </li>
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/brands/github.png"
                              className="img-fluid"
                              alt="github"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Github Enterprise</h6>
                              <small>Security &amp; compliance</small>
                            </div>
                            <h6 className="text-danger mb-0">-$1870</h6>
                          </div>
                        </li>
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/brands/slack.png"
                              className="img-fluid"
                              alt="slack"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Upgrade Slack Plan</h6>
                              <small>Debit card deposit</small>
                            </div>
                            <h6 className="text-danger mb-0">$450</h6>
                          </div>
                        </li>
                        <li className="d-flex mb-4 align-items-center pb-2">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/payments/digital-ocean.png"
                              className="img-fluid"
                              alt="digital"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Digital Ocean</h6>
                              <small>Cloud Hosting</small>
                            </div>
                            <h6 className="text-danger mb-0">-$540</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/brands/aws.png"
                              className="img-fluid"
                              alt="aws"
                              height={30}
                              width={30}
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">AWS Account</h6>
                              <small>Choosing a Cloud Platform</small>
                            </div>
                            <h6 className="text-danger mb-0">-$21</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Deposit / Withdraw */}
            {/* Data Tables */}
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="table-light">
                      <tr>
                        <th className="text-truncate">User</th>
                        <th className="text-truncate">Email</th>
                        <th className="text-truncate">Role</th>
                        <th className="text-truncate">Age</th>
                        <th className="text-truncate">Salary</th>
                        <th className="text-truncate">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/1.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Jordan Stevenson
                              </h6>
                              <small className="text-truncate">@amiccoo</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          susanna.Lind57@gmail.com
                        </td>
                        <td className="text-truncate">
                          <i className="mdi mdi-laptop mdi-24px text-danger me-1" />{" "}
                          Admin
                        </td>
                        <td className="text-truncate">24</td>
                        <td className="text-truncate">34500$</td>
                        <td>
                          <span className="badge bg-label-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/3.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Benedetto Rossiter
                              </h6>
                              <small className="text-truncate">
                                @brossiter15
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          estelle.Bailey10@gmail.com
                        </td>
                        <td className="text-truncate">
                          <i className="mdi mdi-pencil-outline text-info mdi-24px me-1" />{" "}
                          Editor
                        </td>
                        <td className="text-truncate">29</td>
                        <td className="text-truncate">64500$</td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/2.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bentlee Emblin
                              </h6>
                              <small className="text-truncate">@bemblinf</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">milo86@hotmail.com</td>
                        <td className="text-truncate">
                          <i className="mdi mdi-cog-outline text-warning mdi-24px me-1" />{" "}
                          Author
                        </td>
                        <td className="text-truncate">44</td>
                        <td className="text-truncate">94500$</td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/5.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bertha Biner
                              </h6>
                              <small className="text-truncate">@bbinerh</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">lonnie35@hotmail.com</td>
                        <td className="text-truncate">
                          <i className="mdi mdi-pencil-outline text-info mdi-24px me-1" />{" "}
                          Editor
                        </td>
                        <td className="text-truncate">19</td>
                        <td className="text-truncate">4500$</td>
                        <td>
                          <span className="badge bg-label-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/4.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Beverlie Krabbe
                              </h6>
                              <small className="text-truncate">
                                @bkrabbe1d
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          ahmad_Collins@yahoo.com
                        </td>
                        <td className="text-truncate">
                          <i className="mdi mdi-chart-donut mdi-24px text-success me-1" />{" "}
                          Maintainer
                        </td>
                        <td className="text-truncate">22</td>
                        <td className="text-truncate">10500$</td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/7.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bradan Rosebotham
                              </h6>
                              <small className="text-truncate">
                                @brosebothamz
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          tillman.Gleason68@hotmail.com
                        </td>
                        <td className="text-truncate">
                          <i className="mdi mdi-pencil-outline text-info mdi-24px me-1" />{" "}
                          Editor
                        </td>
                        <td className="text-truncate">50</td>
                        <td className="text-truncate">99500$</td>
                        <td>
                          <span className="badge bg-label-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/6.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bree Kilday
                              </h6>
                              <small className="text-truncate">@bkildayr</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">otho21@gmail.com</td>
                        <td className="text-truncate">
                          <i className="mdi mdi-account-outline mdi-24px text-primary me-1" />{" "}
                          Subscriber
                        </td>
                        <td className="text-truncate">23</td>
                        <td className="text-truncate">23500$</td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr className="border-transparent">
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../assets/img/avatars/1.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Breena Gallemore
                              </h6>
                              <small className="text-truncate">
                                @bgallemore6
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          florencio.Little@hotmail.com
                        </td>
                        <td className="text-truncate">
                          <i className="mdi mdi-account-outline mdi-24px text-primary me-1" />{" "}
                          Subscriber
                        </td>
                        <td className="text-truncate">33</td>
                        <td className="text-truncate">20500$</td>
                        <td>
                          <span className="badge bg-label-secondary rounded-pill">
                            Inactive
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*/ Data Tables */}
          </div>
        </div>
        {/* / Content */}
        {/* Footer */}
        <FooterAdmin/>
        {/* / Footer */}
        <div className="content-backdrop fade" />
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
</div>

    </>
  )
}

export default Dashboard
