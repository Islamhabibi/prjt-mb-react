import React from 'react'

function FooterAdmin() {
  return (
    <>
    <footer className="content-footer footer bg-footer-theme">
  <div className="container-xxl">
    <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
      <div className="text-body mb-2 mb-md-0">
        © , made with{" "}
        <span className="text-danger">
          <i className="tf-icons mdi mdi-heart" />
        </span>{" "}
        by
        <a
          href="https://themeselection.com"
          target="_blank"
          className="footer-link fw-medium"
        >
          ThemeSelection
        </a>
      </div>
      <div className="d-none d-lg-inline-block">
        <a
          href="https://themeselection.com/license/"
          className="footer-link me-3"
          target="_blank"
        >
          License
        </a>
        <a
          href="https://themeselection.com/"
          target="_blank"
          className="footer-link me-3"
        >
          More Themes
        </a>
        <a
          href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
          target="_blank"
          className="footer-link me-3"
        >
          Documentation
        </a>
        <a
          href="https://github.com/themeselection/materio-bootstrap-html-admin-template-free/issues"
          target="_blank"
          className="footer-link"
        >
          Support
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default FooterAdmin
