import React from 'react'

function ContactUS() {
  return (
    < >
      <div className="contact-page">
  {/* Breadcrumb */}
  <div className="container">
    <ol className="breadcrumb">
      <li className="breadcrumb-item text-uppercase">
        {" "}
        <a href="index.html" className="text-primary">
          Home
        </a>
      </li>
      <li className="breadcrumb-item active text-uppercase">Contact</li>
    </ol>
  </div>
  {/* Contact page*/}
  <section className="contact p-t-small">
    <div className="container">
      <header className="mb-5">
        <h1 className="heading-line">Contact</h1>
        <p className="lead text-muted">
          Are you curious about something? Do you have some kind of problem with
          our products? As am hastily invited settled at limited civilly fortune
          me. Really spring in extent an by. Judge but built party world. Of so
          am he remember although required. Bachelor unpacked be advanced at.
          Confined in declared marianne is vicinity.
        </p>
      </header>
      <div className="row">
        <div className="col-md-4">
          <div className="contact-icon">
            <div className="icon icon-051-placeholder-1" />
          </div>
          <h3>Address</h3>
          <p className="text-muted font-weight-light">
            13/25 New Avenue
            <br />
            New Heaven, 45Y 73J
            <br />
            England, <strong>Great Britain</strong>
          </p>
        </div>
        <div className="col-md-4">
          <div className="contact-icon">
            <div className="icon icon-051-support" />
          </div>
          <h3>Call center</h3>
          <p className="text-muted font-weight-light">
            This number is toll free if calling from Great Britain otherwise we
            advise you to use the electronic form of communication.
          </p>
          <p>
            <strong>+33 555 444 333</strong>
          </p>
        </div>
        <div className="col-md-4">
          <div className="contact-icon">
            <div className="icon icon-051-message" />
          </div>
          <h3>Electronic support</h3>
          <p className="text-muted font-weight-light">
            Please feel free to write an email to us or to use our electronic
            ticketing system.
          </p>
          <ul className="list-style-none">
            <li>
              <strong>
                <a href="mailto:">info@fakeemail.com</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="#">Ticketio - our ticketing support platform</a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div
    id="map"
    className="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
    tabIndex={0}
    style={{ position: "relative" }}
  >
    {" "}
    <div
      className="leaflet-pane leaflet-map-pane"
      style={{ transform: "translate3d(0px, 0px, 0px)" }}
    >
      <div className="leaflet-pane leaflet-tile-pane">
        <div className="leaflet-layer " style={{ zIndex: 1, opacity: 1 }}>
          <div
            className="leaflet-tile-container leaflet-zoom-animated"
            style={{
              zIndex: 20,
              transform: "translate3d(0px, 0px, 0px) scale(1)"
            }}
          >
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/13/4282/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(683px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/13/4283/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(939px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/13/4282/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(683px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/13/4283/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(939px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/13/4282/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(683px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/13/4283/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(939px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/13/4281/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(427px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/13/4284/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1195px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/13/4281/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(427px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/13/4284/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1195px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/13/4281/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(427px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/13/4284/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1195px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/13/4280/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(171px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/13/4285/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1451px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/13/4280/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(171px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/13/4285/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1451px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/13/4280/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(171px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/13/4285/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1451px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/13/4279/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(-85px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/13/4286/2663.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1707px, 134px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-b.a.ssl.fastly.net/toner-lite/13/4279/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(-85px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/13/4286/2662.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1707px, -122px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-d.a.ssl.fastly.net/toner-lite/13/4279/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(-85px, 390px, 0px)",
                opacity: 1
              }}
            />
            <img
              alt=""
              role="presentation"
              src="https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/13/4286/2664.png"
              className="leaflet-tile"
              style={{
                width: 256,
                height: 256,
                transform: "translate3d(1707px, 390px, 0px)",
                opacity: 1
              }}
            />
          </div>
        </div>
      </div>
      <div className="leaflet-pane leaflet-shadow-pane" />
      <div className="leaflet-pane leaflet-overlay-pane" />
      <div className="leaflet-pane leaflet-marker-pane">
        <img
          src="img/marker.svg"
          className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
          alt=""
          tabIndex={0}
          style={{
            marginLeft: "-12.5px",
            marginTop: "-18.75px",
            width: 25,
            height: "37.5px",
            transform: "translate3d(952px, 200px, 0px)",
            zIndex: 200
          }}
        />
      </div>
      <div className="leaflet-pane leaflet-tooltip-pane" />
      <div className="leaflet-pane leaflet-popup-pane" />
      <div className="leaflet-proxy leaflet-zoom-animated" />
    </div>
    <div className="leaflet-control-container">
      <div className="leaflet-top leaflet-left">
        <div className="leaflet-control-zoom leaflet-bar leaflet-control">
          <a
            className="leaflet-control-zoom-in"
            href="#"
            title="Zoom in"
            role="button"
            aria-label="Zoom in"
          >
            +
          </a>
          <a
            className="leaflet-control-zoom-out"
            href="#"
            title="Zoom out"
            role="button"
            aria-label="Zoom out"
          >
            −
          </a>
        </div>
      </div>
      <div className="leaflet-top leaflet-right" />
      <div className="leaflet-bottom leaflet-left" />
      <div className="leaflet-bottom leaflet-right">
        <div className="leaflet-control-attribution leaflet-control">
          <a
            href="https://leafletjs.com"
            title="A JS library for interactive maps"
          >
            Leaflet
          </a>{" "}
          | Map tiles by <a href="http://stamen.com">Stamen Design</a>,{" "}
          <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> —
          Map data ©{" "}
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>{" "}
          contributors
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="container">
      <header className="mb-5">
        <h2 className="heading-line">Contact form</h2>
      </header>
      <div className="row">
        <div className="col-md-7">
          <form id="contact-form" method="get" action="contact.php">
            <div className="controls">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name">Your firstname *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your firstname"
                      required="required"
                      className="form-control rounded-pill form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="surname">Your lastname *</label>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="Enter your  lastname"
                      required="required"
                      className="form-control rounded-pill form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your  email"
                  required="required"
                  className="form-control rounded-pill form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message for us *</label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  required="required"
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <input
                type="submit"
                defaultValue="Send message"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <p className="text-muted font-weight-light">
            Effects present letters inquiry no an removed or friends. Desire
            behind latter me though in. Supposing shameless am he engrossed up
            additions. My possible peculiar together to. Desire so better am
            cannot he up before points. Remember mistaken opinions it pleasure
            of debating. Court front maids forty if aware their at. Chicken use
            are pressed removed.{" "}
          </p>
          <p className="text-muted font-weight-light">
            Able an hope of body. Any nay shyness article matters own removal
            nothing his forming. Gay own additions education satisfied the
            perpetual. If he cause manor happy. Without farther she exposed saw
            man led. Along on happy could cease green oh.{" "}
          </p>
          <div className="social">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </ >
  )
}

export default ContactUS
