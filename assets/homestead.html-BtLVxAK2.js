import{_ as n,c as a,e,o as l}from"./app-DS8co0gR.js";const p={};function t(i,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="homestead" tabindex="-1"><a class="header-anchor" href="#homestead"><span>Homestead</span></a></h1><p><a href="https://laravel.com/docs/homestead" target="_blank" rel="noopener noreferrer">Official Documentation</a></p><h3 id="install-homestead-on-windows" tabindex="-1"><a class="header-anchor" href="#install-homestead-on-windows"><span>Install Homestead on Windows</span></a></h3><h4 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h4><p><a href="https://developer.hashicorp.com/vagrant/downloads" target="_blank" rel="noopener noreferrer">Vagrant</a></p><p>Clone the Homestead repository</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> E:<span class="token punctuation">\\</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/laravel/homestead.git ./Homestead</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Checkout the <code>release</code> branch</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> Homestead</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> checkout release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Configure</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">./init.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="configuring-homestead" tabindex="-1"><a class="header-anchor" href="#configuring-homestead"><span>Configuring Homestead</span></a></h3><p><code>E:\\Homestead\\Homestead.yaml</code></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">ip</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.56.56&quot;</span></span>
<span class="line"><span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token number">2048</span></span>
<span class="line"><span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token key atrule">provider</span><span class="token punctuation">:</span> virtualbox</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">authorize</span><span class="token punctuation">:</span> ~/.ssh/id_rsa.pub</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">keys</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> ~/.ssh/id_rsa</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">folders</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">map</span><span class="token punctuation">:</span> E<span class="token punctuation">:</span>/code</span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> /home/vagrant/code</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">sites</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">map</span><span class="token punctuation">:</span> homestead.test</span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> /home/vagrant/code/laravel/public</span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">map</span><span class="token punctuation">:</span> reverb.homestead.test</span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//0.0.0.0<span class="token punctuation">:</span><span class="token number">8080</span></span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;proxy&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">map</span><span class="token punctuation">:</span> vue.homestead.test</span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> /home/vagrant/code/vue<span class="token punctuation">-</span>project/dist</span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;spa&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">map</span><span class="token punctuation">:</span> vue<span class="token punctuation">-</span>proxy.homestead.test</span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.56.1<span class="token punctuation">:</span><span class="token number">5173</span>  <span class="token comment"># npm run dev -- --host</span></span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;proxy&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">databases</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> homestead</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">features</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">mariadb</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">postgresql</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">ohmyzsh</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">webdriver</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">meilisearch</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">minio</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">mongodb</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">enabled</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token string">&quot;mysql&quot;</span></span>
<span class="line"><span class="token comment">#    - disabled:</span></span>
<span class="line"><span class="token comment">#        - &quot;postgresql@11-main&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">33060</span> <span class="token comment"># MySQL/MariaDB</span></span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token number">3306</span></span>
<span class="line"><span class="token comment">#    - send: 4040</span></span>
<span class="line"><span class="token comment">#      to: 4040</span></span>
<span class="line"><span class="token comment">#    - send: 54320 # PostgreSQL</span></span>
<span class="line"><span class="token comment">#      to: 5432</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">8025</span> <span class="token comment"># Mailpit</span></span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token number">8025</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">9600</span></span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token number">9600</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">27017</span></span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token number">27017</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> <span class="token number">6379</span></span>
<span class="line">      <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token number">6379</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;public_network&quot;</span></span>
<span class="line">      <span class="token key atrule">ip</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.3.21&quot;</span></span>
<span class="line">      <span class="token key atrule">bridge</span><span class="token punctuation">:</span> <span class="token string">&quot;Realtek PCIe GBE Family Controller&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hostname-resolution" tabindex="-1"><a class="header-anchor" href="#hostname-resolution"><span>Hostname Resolution</span></a></h4><p><code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">192.168.56.56	homestead.test</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="accessing-homestead-globally" tabindex="-1"><a class="header-anchor" href="#accessing-homestead-globally"><span>Accessing Homestead Globally</span></a></h3><p><code>E:\\bin\\homestead.bat</code></p><div class="language-batch line-numbers-mode" data-highlighter="prismjs" data-ext="batch"><pre><code class="language-batch"><span class="line"><span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span></span>
<span class="line"> </span>
<span class="line"><span class="token command"><span class="token keyword">set</span> <span class="token variable">cwd</span><span class="token operator">=</span><span class="token variable">%cd%</span></span></span>
<span class="line"><span class="token command"><span class="token keyword">set</span> <span class="token variable">homesteadVagrant</span><span class="token operator">=</span>E:\\Homestead</span></span>
<span class="line"> </span>
<span class="line"><span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/d</span> <span class="token variable">%homesteadVagrant%</span> </span><span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token command"><span class="token keyword">vagrant</span> %*</span></span>
<span class="line"><span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/d</span> <span class="token variable">%cwd%</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token command"><span class="token keyword">set</span> <span class="token variable">cwd</span><span class="token operator">=</span></span></span>
<span class="line"><span class="token command"><span class="token keyword">set</span> <span class="token variable">homesteadVagrant</span><span class="token operator">=</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">homestead up</span>
<span class="line"></span>
<span class="line">homestead <span class="token function">halt</span></span>
<span class="line"></span>
<span class="line">homestead reload <span class="token parameter variable">--provision</span></span>
<span class="line"></span>
<span class="line">homestead <span class="token function">ssh</span></span>
<span class="line"></span>
<span class="line">homestead destroy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22)])])}const o=n(p,[["render",t]]),u=JSON.parse('{"path":"/laravel/homestead.html","title":"Homestead","lang":"en-US","frontmatter":{},"git":{"updatedTime":1759871598000,"contributors":[{"name":"kelude","username":"kelude","email":"ikelude@gmail.com","commits":1,"url":"https://github.com/kelude"}],"changelog":[{"hash":"14c8f73f9c362b62e6e9c172ff351f7ee348eee3","time":1759871598000,"email":"ikelude@gmail.com","author":"kelude","message":"wip"}]},"filePathRelative":"laravel/homestead.md"}');export{o as comp,u as data};
