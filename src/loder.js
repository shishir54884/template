 $(window).on('load', function() {
            // Create and append preloader HTML
            $('body').prepend(`
                <div id="preloader" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; display: flex; justify-content: center; align-items: center; z-index: 9999;">
                    <div style="width: 50px; height: 50px; border: 5px solid #f3f3f3; border-top: 5px solid #4044ee; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `);

            // Remove preloader after page loads
            setTimeout(function() {
                $('#preloader').fadeOut('slow', function() {
                    $(this).remove();
                });
    }, 500);
});