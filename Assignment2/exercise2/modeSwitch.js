
let isDark = false;

function switchModes()
{
    if (isDark === true)
    {
        console.log("True");
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
        //Two more color changes, this is mainly for the navigation bar and buttons
        document.documentElement.style.setProperty("--col-05", "#94BD62");
        document.documentElement.style.setProperty("--col-06", "#67705C");
        //Two more color changes for link pallette swap
        document.documentElement.style.setProperty("--col-03", "#5252ff");
        document.documentElement.style.setProperty("--col-07", "#C84FF0");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDark = false;
    }

    else
    {   console.log("False");
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.documentElement.style.setProperty("--col-05", "#67705C");
        document.documentElement.style.setProperty("--col-06", "#94BD62");
        document.documentElement.style.setProperty("--col-03", "#C84FF0");
        document.documentElement.style.setProperty("--col-07", "#5252ff");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDark = true;
    }
}