(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4285],{61261:function(e,n,o){"use strict";o.r(n),o.d(n,{_frontmatter:function(){return s},default:function(){return m}});var t=o(22122),i=o(19756),a=(o(15007),o(64983)),l=o(99536),r=["components"],s={},d={_frontmatter:s},p=l.Z;function m(e){var n=e.components,o=(0,i.Z)(e,r);return(0,a.mdx)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"setting-up-your-environment"},"Setting up Your Environment"),(0,a.mdx)("p",null,"Before you can create and run actions, you have to install and configure a couple of tools on your machine. Please note that for some of the steps (creating integrations in I/O Console) you need to have System Administrator or Developer Role permissions. If you don","’","t have those, you need either to be provisioned with these permissions or someone from your team has to share the credentials."),(0,a.mdx)("h2",{id:"step-1-install-aio-cli-and-wsk-cli"},"Step 1: Install aio CLI and wsk CLI"),(0,a.mdx)("p",null,"You need ",(0,a.mdx)("inlineCode",{parentName:"p"},"npm")," installed in order to install ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio")," (make sure you have the latest versions of Node and npm installed):"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"npm install -g @adobe/aio-cli")),(0,a.mdx)("p",null,"For the ",(0,a.mdx)("inlineCode",{parentName:"p"},"wsk")," CLI, download the executable from the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/apache/incubator-openwhisk-cli/releases"},"OpenWhisk GitHub repository"),". Choose the version that matches your operating system and download the compressed archive."),(0,a.mdx)("p",null,"Extract the executable from the compressed archive and place it in a folder of your choice."),(0,a.mdx)("p",null,"Add the folder into which you placed the executable to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"$PATH")," environment variable. This enables you to call the CLI from anywhere."),(0,a.mdx)("p",null,"Try to run these commands to check that ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"wsk")," were properly installed:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"wsk -h")),(0,a.mdx)("p",null,"and:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"aio -h")),(0,a.mdx)("h3",{id:"creating-a-namespace-and-retrieving-the-credentials"},"Creating a Namespace and retrieving the credentials"),(0,a.mdx)("p",null,"If your organization has access to I/O Runtime, then you manage namespaces in the ",(0,a.mdx)("a",{parentName:"p",href:"/adobe-io-runtime/console"},"Developer Console"),". Please note that you need Developer Role or System Administrator permissions in order to do this."),(0,a.mdx)("p",null,"In the Developer Console:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Create a new ",(0,a.mdx)("inlineCode",{parentName:"li"},"Project")),(0,a.mdx)("li",{parentName:"ul"},"Choose one of the workspaces, for example ",(0,a.mdx)("inlineCode",{parentName:"li"},"Production")," and then click ",(0,a.mdx)("inlineCode",{parentName:"li"},"Add service")," and choose ",(0,a.mdx)("inlineCode",{parentName:"li"},"Runtime")," "),(0,a.mdx)("li",{parentName:"ul"},"Go to back to ",(0,a.mdx)("inlineCode",{parentName:"li"},"Workspace overview")," page and, at the top of the page, click on the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Download all")," button. This will download the configuration file for this project -> workspace"),(0,a.mdx)("li",{parentName:"ul"},"Open this file in a text editor and search for the ",(0,a.mdx)("inlineCode",{parentName:"li"},"runtime")," > ",(0,a.mdx)("inlineCode",{parentName:"li"},"namespaces")," entry. This is where you will find the namespace ",(0,a.mdx)("inlineCode",{parentName:"li"},"name")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"auth")," values you can use to set the .wskprops file or configue the ",(0,a.mdx)("inlineCode",{parentName:"li"},"aio")," CLI (see the next sections). ")),(0,a.mdx)("h3",{id:"configuring-the-wsk-cli-with-a-wskprops-file"},"Configuring the wsk CLI with a .wskprops file"),(0,a.mdx)("p",null,"If you have a ",(0,a.mdx)("inlineCode",{parentName:"p"},".wskprops")," file, then you can use it to configure the ",(0,a.mdx)("inlineCode",{parentName:"p"},"wsk")," CLI, so you'll be creating actions in the namespace that is defined in that file."),(0,a.mdx)("p",null,"For Mac, you just need to copy the ",(0,a.mdx)("inlineCode",{parentName:"p"},".wskprops")," in the user home folder."),(0,a.mdx)("p",null,"For Windows, you'll place the ",(0,a.mdx)("inlineCode",{parentName:"p"},".wskprops")," in ",(0,a.mdx)("inlineCode",{parentName:"p"},"C:\\Users\\<user>"),"."),(0,a.mdx)("h3",{id:"signing-in-aio-cli"},"Signing in aio CLI"),(0,a.mdx)("p",null,"There are two ways you can configure your aio CLI: if you have Developer Role or System Administrator permissions, then you can sign in in aio CLI, and then the CLI will be able to retrieve the projects you have created in the Developer Console and select the workspace you want to work in."),(0,a.mdx)("p",null,"This ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#3-signing-in-from-cli"},"page")," walks you through the steps."),(0,a.mdx)("p",null,"If you don't have the right permissions, but you have the namespace and the authorization for it, then you can manually configure aio CLI (see the next section)."),(0,a.mdx)("h3",{id:"configuring-aio-cli-to-use-your-wskprops-file"},"Configuring aio CLI to use your .wskprops file"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio")," CLI will pickup credentials from the exact same path as the wsk CLI ( ",(0,a.mdx)("inlineCode",{parentName:"p"},".wskprops")," file )"),(0,a.mdx)("p",null,"Additionally, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio")," CLI allows the use of .env files, so if you have multiple namespaces you can have a different set of credentials associated with each project/directory.  ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio")," CLI always looks for a .env file in the current working directory before looking to the default location of .wskprops."),(0,a.mdx)("h2",{id:"step-2-testing-the-cli-is-setup-correctly"},"Step 2: Testing the CLI is setup correctly"),(0,a.mdx)("p",null,"Once you've configured the CLI, you should test it:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"wsk list")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"aio runtime list")),(0,a.mdx)("p",null,"If successful, you should see a list of the entities defined in your namespace."),(0,a.mdx)("p",null,"You","’","re ready to ",(0,a.mdx)("a",{parentName:"p",href:"deploy.md"},"deploy your first function"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-setup-md-464c3f41b4d603c76213.js.map