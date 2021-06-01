const progress_bar = document.getElementsByClassName("progress-bar")[0]
setInterval(() => {
    const style = getComputedStyle(progress_bar)
    const width = parseFloat(style.getPropertyValue("--width")) || 0//if width is not found for some reason then it would default to 0
    //current and goal variables needed and new width will be selected
    const current = 5000
    const goal = 100000
    progress_bar.style.setProperty("--width",current/goal)
},5)