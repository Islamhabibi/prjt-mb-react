import React from 'react'
import useravatar from '../../assets/img/avatars/1.png' 
function CardSettings() {
  return (
   <>
    <div className="container-xxl flex-grow-1 container-p-y">
  <h4 className="py-3 mb-4">
    <span className="text-muted fw-light">Account Settings /</span> Account
  </h4>
  <div className="row">
    <div className="col-md-12">
      <ul className="nav nav-pills flex-column flex-md-row mb-4 gap-2 gap-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="javascript:void(0);">
            <i className="mdi mdi-account-outline mdi-20px me-1" />
            Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="pages-account-settings-notifications.html"
          >
            <i className="mdi mdi-bell-outline mdi-20px me-1" />
            Notifications
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="pages-account-settings-connections.html"
          >
            <i className="mdi mdi-link mdi-20px me-1" />
            Connections
          </a>
        </li>
      </ul>
      <div className="card mb-4">
        <h4 className="card-header">Profile Details</h4>
        {/* Account */}
        <div className="card-body">
          <div className="d-flex align-items-start align-items-sm-center gap-4">
            <img
              src={useravatar}
              alt="user-avatar"
              className="d-block w-px-120 h-px-120 rounded"
              id="uploadedAvatar"
            />
            <div className="button-wrapper">
              <label
                htmlFor="upload"
                className="btn btn-primary me-2 mb-3"
                tabIndex={0}
              >
                <span className="d-none d-sm-block">Upload new photo</span>
                <i className="mdi mdi-tray-arrow-up d-block d-sm-none" />
                <input
                  type="file"
                  id="upload"
                  className="account-file-input"
                  hidden=""
                  accept="image/png, image/jpeg"
                />
              </label>
              <button
                type="button"
                className="btn btn-outline-danger account-image-reset mb-3"
              >
                <i className="mdi mdi-reload d-block d-sm-none" />
                <span className="d-none d-sm-block">Reset</span>
              </button>
              <div className="text-muted small">
                Allowed JPG, GIF or PNG. Max size of 800K
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-2 mt-1">
          <form id="formAccountSettings" method="POST" onsubmit="return false">
            <div className="row mt-2 gy-4">
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue="John"
                    autofocus=""
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    defaultValue="Doe"
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    defaultValue="john.doe@example.com"
                    placeholder="john.doe@example.com"
                  />
                  <label htmlFor="email">E-mail</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    name="organization"
                    defaultValue="ThemeSelection"
                  />
                  <label htmlFor="organization">Organization</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-merge">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="202 555 0111"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  <span className="input-group-text">US (+1)</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                  />
                  <label htmlFor="address">Address</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="state"
                    name="state"
                    placeholder="California"
                  />
                  <label htmlFor="state">State</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    name="zipCode"
                    placeholder={231465}
                    maxLength={6}
                  />
                  <label htmlFor="zipCode">Zip Code</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <select id="country" className="select2 form-select">
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                  <label htmlFor="country">Country</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <select id="language" className="select2 form-select">
                    <option value="">Select Language</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="pt">Portuguese</option>
                  </select>
                  <label htmlFor="language">Language</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <select id="timeZones" className="select2 form-select">
                    <option value="">Select Timezone</option>
                    <option value={-12}>
                      (GMT-12:00) International Date Line West
                    </option>
                    <option value={-11}>
                      (GMT-11:00) Midway Island, Samoa
                    </option>
                    <option value={-10}>(GMT-10:00) Hawaii</option>
                    <option value={-9}>(GMT-09:00) Alaska</option>
                    <option value={-8}>
                      (GMT-08:00) Pacific Time (US &amp; Canada)
                    </option>
                    <option value={-8}>
                      (GMT-08:00) Tijuana, Baja California
                    </option>
                    <option value={-7}>(GMT-07:00) Arizona</option>
                    <option value={-7}>
                      (GMT-07:00) Chihuahua, La Paz, Mazatlan
                    </option>
                    <option value={-7}>
                      (GMT-07:00) Mountain Time (US &amp; Canada)
                    </option>
                    <option value={-6}>(GMT-06:00) Central America</option>
                    <option value={-6}>
                      (GMT-06:00) Central Time (US &amp; Canada)
                    </option>
                    <option value={-6}>
                      (GMT-06:00) Guadalajara, Mexico City, Monterrey
                    </option>
                    <option value={-6}>(GMT-06:00) Saskatchewan</option>
                    <option value={-5}>
                      (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                    </option>
                    <option value={-5}>
                      (GMT-05:00) Eastern Time (US &amp; Canada)
                    </option>
                    <option value={-5}>(GMT-05:00) Indiana (East)</option>
                    <option value={-4}>
                      (GMT-04:00) Atlantic Time (Canada)
                    </option>
                    <option value={-4}>(GMT-04:00) Caracas, La Paz</option>
                  </select>
                  <label htmlFor="timeZones">Timezone</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating form-floating-outline">
                  <select id="currency" className="select2 form-select">
                    <option value="">Select Currency</option>
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="bitcoin">Bitcoin</option>
                  </select>
                  <label htmlFor="currency">Currency</label>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary me-2">
                Save changes
              </button>
              <button type="reset" className="btn btn-outline-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
        {/* /Account */}
      </div>
      <div className="card">
        <h5 className="card-header fw-normal">Delete Account</h5>
        <div className="card-body">
          <div className="mb-3 col-12 mb-0">
            <div className="alert alert-warning">
              <h6 className="alert-heading mb-1">
                Are you sure you want to delete your account?
              </h6>
              <p className="mb-0">
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
            </div>
          </div>
          <form id="formAccountDeactivation" onsubmit="return false">
            <div className="form-check mb-3 ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="accountActivation"
                id="accountActivation"
              />
              <label className="form-check-label" htmlFor="accountActivation">
                I confirm my account deactivation
              </label>
            </div>
            <button type="submit" className="btn btn-danger">
              Deactivate Account
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default CardSettings
