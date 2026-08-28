/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Prince Patel - Personal Portfolio
--------------------------------------------------

Table of Content

	. Preloader
	. Menu
	. Theme Switcher (Dark / Light)
	. MagnificPopup Lightbox
	. Share Media
	. Certifications Filter
	. Universal Email Click & Clipboard Copy
	. All Functions

----------------------------------- */
(function ($) {
    "use strict";

    /* -----------------------------------
             Preloader
    ----------------------------------- */
    function loading() {
        $('.loading').delay(300).fadeOut(300);
    }

    /* -----------------------------------
                Menu
    ----------------------------------- */
    function menu() {
        $("#menuToggle").on("click", function () {
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open"); 
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }

    /* -----------------------------------
           Dynamic Theme Switcher
    ----------------------------------- */
    function setupThemeToggle() {
        function applyTheme(theme) {
            if (theme === 'light') {
                $('body').removeClass('dark');
                $('html').removeClass('dark').attr('data-theme', 'light');
                $('#themeIcon').removeClass('fa-sun').addClass('fa-moon');
                $('#themeToggleBtn').attr('title', 'Switch to Dark Mode');
            } else {
                $('body').addClass('dark');
                $('html').addClass('dark').attr('data-theme', 'dark');
                $('#themeIcon').removeClass('fa-moon').addClass('fa-sun');
                $('#themeToggleBtn').attr('title', 'Switch to Light Mode');
            }
        }

        var storedTheme = localStorage.getItem('portfolio_theme');
        if (storedTheme === 'light') {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }

        $(document).on('click', '#themeToggleBtn', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var isDark = $('body').hasClass('dark');
            var nextTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('portfolio_theme', nextTheme);
            applyTheme(nextTheme);
        });
    }

    /* -----------------------------------
	       MagnificPopup Lightbox
    -----------------------------------*/
    function magnificPopup() {
        if ($.fn.magnificPopup) {
            $('.cert-grid-container').magnificPopup({
                delegate: 'a.view-cert',
                type: 'image',
                gallery: {
                    enabled: true
                },
                image: {
                    titleSrc: function (item) {
                        return item.el.attr('title') || item.el.closest('.cert-item-card').find('h5').text() || 'Certificate Preview';
                    }
                },
                zoom: {
                    enabled: true,
                    duration: 300
                },
                mainClass: 'mfp-fade'
            });
        }
    }

    /* -----------------------------------
          Share Media
    -----------------------------------*/
    function shareMedia() {
        $('.btn-share').on("click", function () {
            $('.social-footer').toggleClass('active');
        });
    }

    /* -----------------------------------
          Certifications Filter
    -----------------------------------*/
    function certFilter() {
        $(".cert-filter-btn").on("click", function () {
            var filterValue = $(this).attr("data-filter");
            
            $(".cert-filter-btn").removeClass("active");
            $(this).addClass("active");

            if (filterValue === "all") {
                $(".cert-item-col").stop(true, true).fadeIn(300);
            } else {
                $(".cert-item-col").stop(true, true).hide();
                $('.cert-item-col[data-category="' + filterValue + '"]').stop(true, true).fadeIn(300);
            }
        });
    }

    /* -----------------------------------
          Universal Email Click & Clipboard Copy
    -----------------------------------*/
    function setupEmailInteractions() {
        var email = "prince.patel.cse@gmail.com";

        function copyEmailToClipboard() {
            if (navigator.clipboard && window.isSecureContext) {
                return navigator.clipboard.writeText(email);
            } else {
                var textArea = document.createElement("textarea");
                textArea.value = email;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                return new Promise(function(resolve, reject) {
                    try {
                        document.execCommand('copy');
                        resolve();
                    } catch (err) {
                        reject(err);
                    } finally {
                        document.body.removeChild(textArea);
                    }
                });
            }
        }

        function showToast(message) {
            var toast = $('#emailToast');
            if (!toast.length) {
                toast = $('<div id="emailToast" class="email-copy-toast"><i class="fas fa-check-circle" style="color:#f21e4e;"></i> <span></span></div>');
                $('body').append(toast);
            }
            toast.find('span').text(message);
            toast.addClass('show');
            setTimeout(function () {
                toast.removeClass('show');
            }, 3500);
        }

        // Copy button click handler
        $(document).on('click', '#copyEmailBtn', function (e) {
            e.preventDefault();
            copyEmailToClipboard().then(function () {
                showToast("Email copied to clipboard! (" + email + ")");
            }).catch(function () {
                showToast("Email: " + email);
            });
        });

        // Whenever ANY mailto link is clicked, automatically copy the email to clipboard as well!
        $(document).on('click', 'a[href^="mailto:"]', function () {
            copyEmailToClipboard().then(function () {
                showToast("Email copied to clipboard! (" + email + ")");
            });
        });
    }

    /* -----------------------------------
	      Initialize All
    -----------------------------------*/
    $(window).on("load", function () {
        loading();
    });

    $(function () {
        setupThemeToggle();
        shareMedia();
        menu();
        magnificPopup();
        certFilter();
        setupEmailInteractions();
    });

})(jQuery);