<%
version="202411111505"
SEOAuthor="1111⼈⼒銀⾏ | 全球華⼈股份有限公司"
SEOCompany="1111⼈⼒銀⾏ | 全球華⼈股份有限公司 | www.1111.com.tw"
SEOCopyright="1111⼈⼒銀⾏ | 全球華⼈股份有限公司版權所有© 1111 Job Bank All Rights Reserved."
SEOUrl="https://event.1111.com.tw" & Request.ServerVariables("script_name")
Query=Request.ServerVariables("QUERY_STRING")
If Query <> "" Then SEOUrl = SEOUrl & "?" & Query

SEOImg="共用元件＜metaSEOImg＞"

SEOTitleText="共用元件"
SEOTitle="共用元件＜metaTitle＞"
SEOKeywords="共用元件＜metaKeywords＞"
SEODescription="共用元件＜metaDescription＞"

%>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="SEOTitleText"><%=SEOTitleText%></title>
    <meta name="title" class="SEOTitle" content="<%=SEOTitle%>" />
    <meta name="keywords" class="SEOKeywords" content="<%=SEOKeywords%>" />
    <meta name="Description" class="SEODescription" content="<%=SEODescription%>">
    <meta name="company" content="<%=SEOCompany%>">
    <meta name="copyright" content="<%=SEOCopyright%>">
    <meta name="author" content="<%=SEOAuthor%>">
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="zh_TW" />
    <meta property="og:site_name" content="" />
    <meta class="SEOTitle" property="og:title" content="<%=SEOTitle%>" />
    <meta property="og:url" content="<%=SEOUrl%>" />
    <meta property="og:image" content="<%=SEOImg%>" />
    <meta class="SEODescription" property="og:description" content="<%=SEODescription%>" />
    <meta class="SEOTitle" name="twitter:title" content="<%=SEOTitle%>" />
    <meta class="SEODescription" name="twitter:description" content="<%=SEODescription%>" />
    <meta class="SEOKeywords" name="twitter:keywords" content="<%=SEOKeywords%>" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:url" content="<%=SEOUrl%>" />
    <link rel="canonical" href="<%=SEOUrl%>" />
    <script src="https://event.1111.com.tw/eventAPI/tool/202307announce/index.js"></script>