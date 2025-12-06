// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="rationale.html">Rationale</a></li><li class="chapter-item expanded affix "><li class="part-title">Philosophy &amp; Culture</li><li class="chapter-item expanded "><a href="values-skills.html"><strong aria-hidden="true">1.</strong> Values &amp; Skills</a></li><li class="chapter-item expanded "><a href="culture.html"><strong aria-hidden="true">2.</strong> Culture</a></li><li class="chapter-item expanded "><a href="qa-manifesto.html"><strong aria-hidden="true">3.</strong> QA Manifesto</a></li><li class="chapter-item expanded "><a href="questions.html"><strong aria-hidden="true">4.</strong> Questions</a></li><li class="chapter-item expanded "><a href="simple-engineering-problems.html"><strong aria-hidden="true">5.</strong> Simple Engineering Problems</a></li><li class="chapter-item expanded "><a href="doing-better-in-AI-era.html"><strong aria-hidden="true">6.</strong> Doing Better in AI Era</a></li><li class="chapter-item expanded affix "><li class="part-title">Guides &amp; Templates</li><li class="chapter-item expanded "><a href="arch-doc-template.html"><strong aria-hidden="true">7.</strong> Architecture Documentation Template</a></li><li class="chapter-item expanded "><a href="poc-hero.html"><strong aria-hidden="true">8.</strong> POC Hero</a></li><li class="chapter-item expanded "><a href="presentation-hero.html"><strong aria-hidden="true">9.</strong> Presentation Hero</a></li><li class="chapter-item expanded "><a href="sales-hero.html"><strong aria-hidden="true">10.</strong> Sales Hero</a></li><li class="chapter-item expanded affix "><li class="part-title">Self-Growth Resources</li><li class="chapter-item expanded "><a href="agile-dev-resources.html"><strong aria-hidden="true">11.</strong> Agile Development Resources</a></li><li class="chapter-item expanded "><a href="ai-resources.html"><strong aria-hidden="true">12.</strong> AI Resources</a></li><li class="chapter-item expanded "><a href="arch-devops-resources.html"><strong aria-hidden="true">13.</strong> Architecture DevOps Resources</a></li><li class="chapter-item expanded "><a href="cloud-native-resources.html"><strong aria-hidden="true">14.</strong> Cloud Native Resources</a></li><li class="chapter-item expanded "><a href="data-eng-resources.html"><strong aria-hidden="true">15.</strong> Data Engineering Resources</a></li><li class="chapter-item expanded "><a href="devops-resources.html"><strong aria-hidden="true">16.</strong> DevOps Resources</a></li><li class="chapter-item expanded "><a href="GCP-resources.html"><strong aria-hidden="true">17.</strong> GCP Resources</a></li><li class="chapter-item expanded "><a href="java-resources.html"><strong aria-hidden="true">18.</strong> Java Resources</a></li><li class="chapter-item expanded "><a href="js-frontend-resources.html"><strong aria-hidden="true">19.</strong> JavaScript Frontend Resources</a></li><li class="chapter-item expanded "><a href="mobile-resources.html"><strong aria-hidden="true">20.</strong> Mobile Resources</a></li><li class="chapter-item expanded "><a href="python-resources.html"><strong aria-hidden="true">21.</strong> Python Resources</a></li><li class="chapter-item expanded "><a href="qa-resources.html"><strong aria-hidden="true">22.</strong> QA Resources</a></li><li class="chapter-item expanded "><a href="react-resources.html"><strong aria-hidden="true">23.</strong> React Resources</a></li><li class="chapter-item expanded "><a href="react-native-resources.html"><strong aria-hidden="true">24.</strong> React Native Resources</a></li><li class="chapter-item expanded "><a href="scala-resources.html"><strong aria-hidden="true">25.</strong> Scala Resources</a></li><li class="chapter-item expanded "><a href="security-infosec-resources.html"><strong aria-hidden="true">26.</strong> Security InfoSec Resources</a></li><li class="chapter-item expanded "><a href="ux-resources.html"><strong aria-hidden="true">27.</strong> UX Resources</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
