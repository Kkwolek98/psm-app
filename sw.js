self.addEventListener('fetch', function(ev) {
    if (ev.request.url.endsWith('.worker')) {
      ev.respondWith(new Response('<strong>Ten URL istnieje!</strong>',
      {headers:
       {"Content-type":"text/html"}
     }));
    }
  });