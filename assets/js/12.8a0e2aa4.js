(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,t,r){"use strict";r.r(t);var o=r(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"azure-container-registry-adds-teleportation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-container-registry-adds-teleportation"}},[e._v("#")]),e._v(" Azure Container Registry Adds Teleportation")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://stevelaskerblog.files.wordpress.com/2019/10/image-8.png?w=132",alt:""}})]),e._v(" "),r("p",[e._v("Instancing a custom environment within seconds is one of the many wonders of running containers. Having to wait for the image and its layers to download & decompress the first time is the "),r("em",[e._v("current")]),e._v(" price of admission.")]),e._v(" "),r("blockquote",[r("p",[e._v("Project Teleport removes the cost of download and decompression by SMB mounting pre-expanded layers from the Azure Container Registry to Teleport enabled Azure container hosts.")])]),e._v(" "),r("h2",{attrs:{id:"teleportation-performance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teleportation-performance"}},[e._v("#")]),e._v(" Teleportation Performance")]),e._v(" "),r("p",[e._v("The following table represents initial performance metrics across different image sizes. The amount of time to teleport an image has less to do with the size of the image, but rather the number of layers that must be mounted. This is an area of performance we’ll continue to focus upon.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://stevelaskerblog.files.wordpress.com/2019/10/teleportmetricslayers.png?w=1024",alt:""}})]),e._v(" "),r("blockquote",[r("p",[e._v("Our opportunistic goal for Project Teleport is 90% of locally cached images. We’re not considering teleportation of organic material, as 90% would not be "),r("em",[e._v("quite")]),e._v(" good enough. Being able to pull any custom image, to any serverless host, at 90% of the startup time, seems pretty good. Especially considering it’s a 100% unattainable goal of having every custom image on every serverless host.")]),e._v(" "),r("p",[r("cite",[e._v("Steve Lasker – Program Manager – Azure Container Registries")])])]),e._v(" "),r("h2",{attrs:{id:"how-project-teleport-optimizes-registry-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-project-teleport-optimizes-registry-operations"}},[e._v("#")]),e._v(" How Project Teleport Optimizes Registry Operations")]),e._v(" "),r("p",[e._v("While Docker didn’t invent containers, they did provide a highly productive end to end experience for building, pushing, discovering, pulling and instancing containers. Container registries are one of the innovations that provide content addressable objects through a collection of layers.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://stevelaskerblog.files.wordpress.com/2019/10/dockerimagepull.png?w=1024",alt:""}})]),e._v(" "),r("p",[e._v("The underlying container flow today involves:")]),e._v(" "),r("ol",[r("li",[e._v("pulling an image, which calls a REST endpoint, returning a collection of layer IDs")]),e._v(" "),r("li",[e._v("comparing the local cache, determining the delta of layers that must be retrieved")]),e._v(" "),r("li",[e._v("requesting secured URLs for each layer ID")]),e._v(" "),r("li",[e._v("pulling each layer")]),e._v(" "),r("li",[e._v("decompressing each layer")]),e._v(" "),r("li",[e._v("instancing the container when all the layers are available")])]),e._v(" "),r("p",[e._v("This flow works well for internet protocols where the network is comparatively unreliable and slower than an intra-datacenter network. For a reasonably sized image, it’s faster to serve compressed blobs, decompressing on the client, than waiting for larger payloads to fight with YouTube, Netflix and a million other packets traveling across the wild internet.")]),e._v(" "),r("p",[e._v("When running within a controlled datacenter, the network is reliable and fast, while CPU, disk speed and memory become the bottleneck for pulling complete layers and decompressing them before usage.")]),e._v(" "),r("p",[e._v("When using dedicated hosts, such as VMs provisioned for Kubernetes, pulling the first image is painful, but subsequent image pulls benefit from the pre-cached layers. As clouds move to “serverless” environments, where the hosts are dynamically allocated, each container run is a new environment. Cloud providers pre-cache the most common base layers, but the hit ratio varies across each service and time, as newer versions are continually released. This creates an inconsistent experience, detracting from the value of serverless.")]),e._v(" "),r("h2",{attrs:{id:"highly-factored-registry-protocol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#highly-factored-registry-protocol"}},[e._v("#")]),e._v(" Highly Factored Registry Protocol")]),e._v(" "),r("p",[e._v("The designers of the "),r("a",{attrs:{href:"https://github.com/opencontainers/distribution-spec/",target:"_blank",rel:"noopener noreferrer"}},[e._v("distribution-spec"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/opencontainers/image-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("image-spec"),r("OutboundLink")],1),e._v(" created a highly factored protocol that enables cloud providers to adhere to a public spec, with the flexibility to implement cloud specific storage and authentication solutions. Project Teleport takes advantage of this factoring by adhering to the public API that container developers are accustomed to, while providing cloud specific optimizations.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://stevelaskerblog.files.wordpress.com/2019/10/telportimagepull.png?w=1024",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Project Teleport assumes the image pull runs within an optimized environment. The underlying Teleport flow is slightly, but very impactfully different, involving:")]),e._v(" "),r("ol",[r("li",[e._v("pulling an image, which involves a REST endpoint that returns the collection of layer IDs")]),e._v(" "),r("li",[e._v("comparing the local cache, determining the delta of layers that must be retrieved")]),e._v(" "),r("li",[r("strong",[r("em",[e._v("requesting "),r("a",{attrs:{href:"https://azure.microsoft.com/en-us/blog/announcing-the-general-availability-of-azure-premium-files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Premium File"),r("OutboundLink")],1),e._v(" mount points for each layer ID")])])]),e._v(" "),r("li",[r("strong",[r("em",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Server_Message_Block",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMB"),r("OutboundLink")],1),e._v(" mounting each layer as pre-expanded content")])])]),e._v(" "),r("li",[e._v("instancing the container when all the layers are available")])]),e._v(" "),r("p",[e._v("The benefits of Project Teleport include:")]),e._v(" "),r("ul",[r("li",[e._v("when using the SMB protocol, only the content read by the container is pulled across the network, speeding container start time")]),e._v(" "),r("li",[e._v("no decompression in the run flow, removing the additional CPU, local disk speed and memory bottlenecks")]),e._v(" "),r("li",[e._v("overall reduced network traffic, as only the subset of an image that’s utilized is pulled across the network")]),e._v(" "),r("li",[e._v("the ability to leverage local image cache information as the teleported mounts intermix with the local cache")])]),e._v(" "),r("h2",{attrs:{id:"orca-a-teleport-client-for-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#orca-a-teleport-client-for-azure"}},[e._v("#")]),e._v(" Orca, a Teleport Client for Azure")]),e._v(" "),r("p",[e._v("Project Teleport is a registry transport protocol, enabling container layers to be teleported from the registry directly to a container host. Normally, you would issue docker run commands to pull and run an image. However, we need a means to plugin the teleport protocol to the container host. Project Teleport takes advantage of the "),r("a",{attrs:{href:"https://github.com/containerd/containerd#snapshot-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("containerd snapshot plugin"),r("OutboundLink")],1),e._v(". As containerd and the docker client evolve, we’ll simply plugin Project Teleport to a new docker client. Until that time, we provide an orca client, for a subset of docker functionality, focusing on the running of container images. For instance, container building is not yet supported.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th")])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:"https://stevelaskerblog.files.wordpress.com/2019/10/image-2.png?w=363",alt:""}})]),e._v(" "),r("td",[r("img",{attrs:{src:"https://stevelaskerblog.files.wordpress.com/2019/10/image-3.png?w=245",alt:""}})])]),e._v(" "),r("tr",[r("td",[e._v("Orca represents the amazing Orca species of whales, roaming the Seattle Puget Sound.")]),e._v(" "),r("td",[e._v("Our own Brendan Burns also has a sailboat, appropriately named Orca.")])])])]),e._v(" "),r("h2",{attrs:{id:"previewing-teleportation-with-acr-tasks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#previewing-teleportation-with-acr-tasks"}},[e._v("#")]),e._v(" Previewing Teleportation with ACR Tasks")]),e._v(" "),r("p",[e._v("While our goal is to enable Project Teleport on all Azure Services, today we are previewing Teleport with "),r("a",{attrs:{href:"https://aka.ms/acr/tasks",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Tasks"),r("OutboundLink")],1),e._v(". ACR Tasks provides the ability build and run container images in a highly optimized and securely isolated environment. The initial Project Teleport preview focuses on running Linux images.")]),e._v(" "),r("p",[e._v("Because ACR Tasks is a focused environment, we can preview teleportation with customer provided images without having to support a large surface area. Based on your feedback and the evolution of containerd, we’ll know when we can expand usage to other Azure services")]),e._v(" "),r("h2",{attrs:{id:"running-containers-with-the-orca-client-using-the-teleport-transport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-containers-with-the-orca-client-using-the-teleport-transport"}},[e._v("#")]),e._v(" Running Containers With the Orca Client, Using the Teleport Transport")]),e._v(" "),r("p",[e._v("The following two commands demonstrate running ACR Tasks with and without Project Teleport.")]),e._v(" "),r("p",[r("strong",[e._v("ACR Run:")])]),e._v(" "),r("p",[r("code",[e._v('az acr run -r demo42 --cmd "demo42.azurecr.io/batchprocessor:1" /dev/null')]),r("br"),e._v("\nThe above command executes an "),r("a",{attrs:{href:"https://aka.ms/acr/task",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Task"),r("OutboundLink")],1),e._v(", on the "),r("code",[e._v("demo42")]),e._v(" registry. The "),r("code",[e._v("--cmd")]),e._v(" parameter runs the "),r("code",[e._v("batchprocessor")]),e._v(" image. Like "),r("code",[e._v("docker run")]),e._v(", "),r("code",[e._v("acr task run")]),e._v(" takes a positional argument that represents the context. Since we’re not passing a context, we just pass "),r("code",[e._v("/dev/null")])]),e._v(" "),r("p",[r("strong",[e._v("Teleporting the batchprocessor image:")])]),e._v(" "),r("p",[r("code",[e._v('az acr run -r demo42 --cmd "**orca run** demo42.azurecr.io/batchprocessor:1" /dev/null')]),r("br"),e._v("\nThe above command instructs "),r("a",{attrs:{href:"https://aka.ms/acr/task",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Tasks"),r("OutboundLink")],1),e._v(" to use the orca client to run the "),r("code",[e._v("batchprocessor")]),e._v(" image. Over time, the "),r("code",[e._v("--cmd")]),e._v(" parameter will directly support Teleport enabled images, removing the need to specify "),r("code",[e._v("orca run")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"under-the-hood-of-an-image-teleporter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood-of-an-image-teleporter"}},[e._v("#")]),e._v(" Under the Hood of an Image Teleporter")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://stevelaskerblog.files.wordpress.com/2019/10/dockerorca.png?w=1024",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Within ACR, we’ve expanded support from compressed blobs, using "),r("a",{attrs:{href:"https://azure.microsoft.com/services/storage/blobs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blob Storage"),r("OutboundLink")],1),e._v(", to "),r("a",{attrs:{href:"https://azure.microsoft.com/en-us/blog/announcing-the-general-availability-of-azure-premium-files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Premium Files"),r("OutboundLink")],1),e._v(", storing expanded layers. Each expanded layer is persisted as a "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/VHD_(file_format)",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual hard disk (.vhd)"),r("OutboundLink")],1),e._v(" which are supported by Linux and Windows clients.")]),e._v(" "),r("p",[e._v("To support standard docker clients, or any client capable of pushing a container image, ACR accepts the incoming image and checks to see if the target repository supports teleportation. If the repository is teleport enabled, an "),r("strong",[e._v("ACR expansion service")]),e._v(" creates a decompressed .vhd for each layer. By storing each layer as a .vhd, ACR can continue to maintain de-duping of common layers across multiple images, while maintaining repository based RBAC.")]),e._v(" "),r("p",[e._v("When a request is made to pull an image, the orca client provides header information stating the region and whether it’s teleport enabled. If the registry is in the same region, teleport SMB mount points are returned. If the client is in a different region, a fallback to compressed blob URLs are returned.")]),e._v(" "),r("blockquote",[r("p",[e._v("The SMB Teleporter depends on intra-datacenter networks, limiting short range teleportation. To enable a "),r("a",{attrs:{href:"https://stevelasker.blog/2018/11/14/choosing-a-docker-container-registry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("best practice of having images network-close to the container host"),r("OutboundLink")],1),e._v(", future releases will support multi-region Teleportation through an "),r("a",{attrs:{href:"https://aka.ms/acr/geo-replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Geo-replication"),r("OutboundLink")],1),e._v(" translocator.")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://stevelaskerblog.files.wordpress.com/2019/10/orcadocker.png?w=1024",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("In future releases we plan to enable ACR Task build support, teleporting base images and writing new image layers directly to the registry. As the image build completes, ACR will compress the layers into traditional blobs, enabling standard docker clients.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://stevelaskerblog.files.wordpress.com/2019/10/orcaorca.png?w=1024",alt:""}})]),e._v(" "),r("p",[e._v("When paired with "),r("a",{attrs:{href:"https://github.com/Azure/acr/blob/master/docs/Tasks/buildx/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Task buildx caching"),r("OutboundLink")],1),e._v(", dramatic improvements from code-commit to deploy performance can be realized.")]),e._v(" "),r("h2",{attrs:{id:"the-future-of-container-teleportation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-future-of-container-teleportation"}},[e._v("#")]),e._v(" The Future of Container Teleportation")]),e._v(" "),r("p",[e._v("The future of Project Teleport is broken into the following categories:")]),e._v(" "),r("ul",[r("li",[e._v("Incorporating user feedback")]),e._v(" "),r("li",[e._v("Improved mounting performance")]),e._v(" "),r("li",[e._v("Supporting all Azure services using containers")]),e._v(" "),r("li",[e._v("Windows containers")]),e._v(" "),r("li",[e._v("Building images, teleporting the base layers and writing expanded layers directly to the registry")]),e._v(" "),r("li",[e._v("Geo-replication translocation")])]),e._v(" "),r("p",[e._v("Thankfully, the teleport project is split across multiple teams, enabling parallelization.")]),e._v(" "),r("h2",{attrs:{id:"teleporting-images-across-all-azure-container-hosts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teleporting-images-across-all-azure-container-hosts"}},[e._v("#")]),e._v(" Teleporting Images Across All Azure Container Hosts")]),e._v(" "),r("p",[e._v("Project Teleport is designed to support all container hosts, including Linux & Windows, and all Azure services. This includes AKS, ACI, Virtual Kubelet, Machine Learning, ACR Tasks and the golden serverless scenario, Azure Functions.")]),e._v(" "),r("h2",{attrs:{id:"teleporting-serverless-functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#teleporting-serverless-functions"}},[e._v("#")]),e._v(" Teleporting Serverless Functions")]),e._v(" "),r("p",[e._v("When we think about serverless functions, the ability to instantly run some custom set of code becomes the holy grail. The service must scale from 0 to infinity ("),r("em",[e._v("and beyond")]),e._v("), while only charging for the actual usage. The reference to "),r("strong",[r("em",[e._v("instant")])]),e._v(" and "),r("strong",[r("em",[e._v("custom code")])]),e._v(" is the challenge. Today, serverless platforms utilize containers to host known environments for specific language runtimes. To achieve specific language runtimes, services mount user code into a pre-allocated pool of container instances. Pulling custom images is just too slow. With Project Teleport, we can now expand the environments and the languages you prefer, bringing whatever custom images you desire in near instant time.")]),e._v(" "),r("h2",{attrs:{id:"how-can-you-teleport-your-containers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-can-you-teleport-your-containers"}},[e._v("#")]),e._v(" How Can You Teleport Your Containers?")]),e._v(" "),r("p",[e._v("The customer feedback we get with ACR Tasks will help us improve teleportation across all Azure service hosts. We’ve been working on Teleportation since early 2018, so we’re obviously excited to hear what you think, and learn how we need to complete the scenarios. After the first round of a private preview feedback, we’ll open a public preview.")]),e._v(" "),r("ul",[r("li",[e._v("To Help us test teleportation of your images – "),r("a",{attrs:{href:"https://aka.ms/teleport/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign up here"),r("OutboundLink")],1),e._v(" for the private preview")]),e._v(" "),r("li",[e._v("Are you just as excited with container scenarios, building teleporters and other "),r("a",{attrs:{href:"https://aka.ms/acr/roadmap",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR roadmap capabilities"),r("OutboundLink")],1),e._v("? Apply here for "),r("a",{attrs:{href:"https://aka.ms/acr/jobs",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Jobs"),r("OutboundLink")],1)])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("Steve Lasker")])])}),[],!1,null,null,null);t.default=a.exports}}]);