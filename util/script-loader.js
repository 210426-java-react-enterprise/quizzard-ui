export function scriptLoader(scriptPath, scriptId = 'dynamic-js') {
    let script = document.getElementById(scriptId);
    if (script) script.remove();
    script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptPath;
    if (scriptId == 'dynamic-js') script.type = 'module';
    document.body.appendChild(script);
}
