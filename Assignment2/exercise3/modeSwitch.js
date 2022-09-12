
let isDark = false;

function switchModes()
{
    if (isDark === true)
    {
        document.documentElement.style.setProperty("--col-01", "#94B49F");
        document.documentElement.style.setProperty("--col-05", "#483838");

        document.getElementById("DarkMode").innerHTML = "Dark Mode";
        isDark = false;
    }

    else
    { 
        document.documentElement.style.setProperty("--col-01", "#483838");
        document.documentElement.style.setProperty("--col-05", "#94B49F");

        document.getElementById("DarkMode").innerHTML = "Light Mode";
        isDark = true;
    }
}