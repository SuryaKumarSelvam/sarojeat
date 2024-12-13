import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer className='footer-section'>
        <div
            id="section-footer"
            className="full-width section-with-padding
                    background-base
                    "
            data-background="base"
        >
            <div className="max-width three-grid footer">
            <div className="three-block legal-block normal">
                <h1>SAROJ eats</h1>
                <p className="website_copyright">
                Copyright © 2024,{" "}
                <a href="index.html" title="">
                    SAROJ eats
                </a>
                </p>
                <p className="visible-links">All rights reserved. </p>
                <div className="payment-icons"></div>
                <p className="powered_by">
                <a
                    target="_blank"
                    rel="nofollow"
                    href="#"
                >
                    Powered by .................
                </a>
                </p>
            </div>
            <div className="three-block menu-block normal">
                <div className="flex flex-v-top">
                <div className="menu ">
                    <h2>Quick Links</h2>
                    <ul>
                    <li>
                        <a href="#">
                        <span className="underline-animation">Our Story</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="underline-animation">FAQs</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="underline-animation">Contact Us</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="menu ">
                    <h2>Policies</h2>
                    <ul>
                    <li>
                        <a href="#">
                        <span className="underline-animation">
                            Shipping &amp; Delivery
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="underline-animation">Terms of Service</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="underline-animation">
                            Return, Exchange and Cancellation
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <span className="underline-animation">Privacy Policy</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="three-block newsletter-block normal">
                <h2>Newsletter</h2>
                <p className="visible-links">
                Enter your email address below to join our mailing list and have our
                latest news and member-only deals delivered straight to your inbox.
                </p>
                <form
                
                className="newsletter-form use-barracuda-ajax-form"
                >
                <input type="hidden" name="form_type" defaultValue="customer" />
                <input type="hidden" name="utf8" defaultValue="✓" />
                <input type="hidden" name="contact[tags]" defaultValue="newsletter" />
                <input
                    type="hidden"
                    name="return_to"
                    defaultValue="/pages/thank-you"
                />
                <div className="form-input-lines">
                    <label className="label-hidden" htmlFor="NewsletterForm--footer">
                    Your email
                    </label>
                    <input
                    id="NewsletterForm--footer"
                    type="email"
                    name="contact[email]"
                    className="only-under"
                    defaultValue=""
                    aria-required="true"
                    autoCorrect="off"
                    autoCapitalize="off"
                    autoComplete="email"
                    placeholder="Enter your email"
                    required=""
                    />
                </div>
                <a
                    href="javascript:document.querySelector('#subscribe').dispatchEvent(new Event('click'))"
                    className="font-demibold flex flex-v-center arrow-link"
                >
                    Subscribe
                    <span className="icon icon-animated-right  ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={46}
                        height={24}
                        viewBox="0 0 46 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-right-circle"
                    >
                        <polyline points="22 16 26 12 22 8" />
                        <line x1={2} y1={12} x2={26} y2={12} />
                    </svg>
                    </span>
                </a>
                <button
                    type="submit"
                    className="newsletter-submit hidden"
                    name="commit"
                    id="subscribe"
                >
                    Subscribe
                </button>
                </form>
            </div>
            </div>
        </div>
        </footer>

    </>
  )
}

export default Footer