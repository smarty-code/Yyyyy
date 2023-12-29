const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
<script type="text/javascript">
    var app_url = 'https://instantlinks.in/';
    var app_api_token = 'f87424b3b05c522df2386414d92060bfad3b839e';
    var app_advert = 1;
    var app_domains = ["https://yyyyy-xtef.vercel.app/"];
</script>
<script src='//instantlinks.in/js/full-page-script.js'></script>
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
