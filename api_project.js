define({  "name": "推送服务API",  "version": "1.0.0",  "description": "",  "title": "推送服务API",  "url": "http://172.16.103.147:9091/push",  "apidoc": "0.3.0",  "header": {    "title": "推送服务中间件",    "content": "<h2>1.必传参数</h2>\n<p><strong>fromSystem</strong> ：调用来源，参考如下表格</p>\n<table>\n<thead>\n<tr>\n<th>调用来源</th>\n<th style=\"text-align:right\">含义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>oms</td>\n<td style=\"text-align:right\">订单系统</td>\n</tr>\n<tr>\n<td>pad</td>\n<td style=\"text-align:right\">pad客户端</td>\n</tr>\n<tr>\n<td>member</td>\n<td style=\"text-align:right\">会员系统</td>\n</tr>\n<tr>\n<td>promotion</td>\n<td style=\"text-align:right\">促销系统</td>\n</tr>\n<tr>\n<td>logistics</td>\n<td style=\"text-align:right\">物流系统</td>\n</tr>\n<tr>\n<td>bj_wechat</td>\n<td style=\"text-align:right\">北京微商城</td>\n</tr>\n<tr>\n<td>xs_wechat</td>\n<td style=\"text-align:right\">下沙微商城</td>\n</tr>\n<tr>\n<td>jq_wechat</td>\n<td style=\"text-align:right\">笕桥微商城</td>\n</tr>\n<tr>\n<td>bj_wap</td>\n<td style=\"text-align:right\">北京wap站</td>\n</tr>\n<tr>\n<td>web</td>\n<td style=\"text-align:right\">网站</td>\n</tr>\n</tbody>\n</table>\n<h2>2.全局返回结果样式</h2>\n <pre><code>\n{\n    \"code\": \"SUCCESS\",\n    \"codeInfo\": \"操作成功\",\n    \"data\": \"\"\n}</code></pre>\n<h2>3.返回结果字段说明</h2>\n<table>\n<thead>\n<tr>\n<th>字段</th>\n<th style=\"text-align:right\">含义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>code</td>\n<td style=\"text-align:right\">返回码</td>\n</tr>\n<tr>\n<td>codeInfo</td>\n<td style=\"text-align:right\">状态文字描述</td>\n</tr>\n<tr>\n<td>data</td>\n<td style=\"text-align:right\">返回具体数据</td>\n</tr>\n</tbody>\n</table>\n<h2>4.全局返回码code说明</h2>\n<table>\n<thead>\n<tr>\n<th>返回码</th>\n<th style=\"text-align:right\">含义</th>\n<th style=\"text-align:center\">说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>SUCCESS</td>\n<td style=\"text-align:right\">成功</td>\n<td style=\"text-align:center\">请求成功</td>\n</tr>\n<tr>\n<td>FAIL</td>\n<td style=\"text-align:right\">失败</td>\n<td style=\"text-align:center\">请求失败</td>\n</tr>\n<tr>\n<td>EMPTY</td>\n<td style=\"text-align:right\">失败</td>\n<td style=\"text-align:center\">请求结果为空</td>\n</tr>\n</tbody>\n</table>\n<hr>\n"  },  "footer": {    "title": "Copyright",    "content": "<h1>Add Something. ~o V o~</h1>\n"  },  "template": {    "withCompare": true,    "withGenerator": true  },  "order": [    "User",    "Wxtemplate"  ],  "sampleUrl": false,  "defaultVersion": "0.0.0",  "generator": {    "name": "apidoc",    "time": "2018-05-09T03:20:46.616Z",    "url": "http://apidocjs.com",    "version": "0.17.5"  }});
