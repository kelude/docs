import{_ as n,c as e,e as a,o as i}from"./app-DS8co0gR.js";const l={};function d(r,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h1 id="dante-server" tabindex="-1"><a class="header-anchor" href="#dante-server"><span>Dante Server</span></a></h1><h2 id="install-on-ubuntu" tabindex="-1"><a class="header-anchor" href="#install-on-ubuntu"><span>Install on Ubuntu</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> dante-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> systemctl status danted</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> danted <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/danted.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">logoutput: syslog</span>
<span class="line"></span>
<span class="line"># The listening network interface or address.</span>
<span class="line">internal: eth0 port = 1080</span>
<span class="line"></span>
<span class="line"># The proxying network interface or address.</span>
<span class="line">external: eth0</span>
<span class="line"></span>
<span class="line"># socks-rules determine what is proxied through the external interface.</span>
<span class="line">socksmethod: username</span>
<span class="line"></span>
<span class="line"># client-rules determine who can connect to the internal interface.</span>
<span class="line">clientmethod: none</span>
<span class="line"></span>
<span class="line">user.privileged: root</span>
<span class="line"></span>
<span class="line">user.unprivileged: nobody</span>
<span class="line"></span>
<span class="line">user.libwrap: nobody</span>
<span class="line"></span>
<span class="line">client pass {</span>
<span class="line">    from: 0.0.0.0/0 to: 0.0.0.0/0</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">socks pass {</span>
<span class="line">    from: 0.0.0.0/0 to: 0.0.0.0/0</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> ufw allow <span class="token number">1080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-s</span> /bin/false your_dante_user</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">passwd</span> your_dante_user</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> systemctl restart danted</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> systemctl status danted</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-x</span> socks5://your_dante_user:your_dante_password@your_server_ip:1080 <span class="token punctuation">\\</span></span>
<span class="line">http://www.google.com/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,13)])])}const c=n(l,[["render",d]]),p=JSON.parse('{"path":"/notes/dante-server.html","title":"Dante Server","lang":"en-US","frontmatter":{},"git":{"updatedTime":1759871598000,"contributors":[{"name":"kelude","username":"kelude","email":"ikelude@gmail.com","commits":1,"url":"https://github.com/kelude"}],"changelog":[{"hash":"14c8f73f9c362b62e6e9c172ff351f7ee348eee3","time":1759871598000,"email":"ikelude@gmail.com","author":"kelude","message":"wip"}]},"filePathRelative":"notes/dante-server.md"}');export{c as comp,p as data};
