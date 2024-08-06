# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.29.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.28.1...@dynamic-framework/ui-react@1.29.0) (2024-08-06)


### Style Features

* **style:** add extra spacers up to 120px ([d894f95](https://github.com/dynamic-framework/dynamic-ui/commit/d894f959a690655783573191af2f9c3018685678))
* **style:** change border-color to gray-100 ([f5d36f3](https://github.com/dynamic-framework/dynamic-ui/commit/f5d36f3ffd482e6ddc012f3102ff5b7d5c0c117c))


### Features

* **DAlert:** remove support to showIcon prop, alert separator, soft style ([d433a91](https://github.com/dynamic-framework/dynamic-ui/commit/d433a91d3c803f057f86d9e72e7e3a5d9c0cc3fd))
* **DAlert:** rename alert types as theme types ([601c4fd](https://github.com/dynamic-framework/dynamic-ui/commit/601c4fd945aa298447534ace710cd53d39540cbb))
* **DBadge:** add icon support ([4cf513e](https://github.com/dynamic-framework/dynamic-ui/commit/4cf513edc711079645ac433edb6f4708ab84fe22))
* **DBadge:** set new color variants ([aca27a3](https://github.com/dynamic-framework/dynamic-ui/commit/aca27a3843f9558de7cd8fec48851c6625d254fb))
* **DSkeleton:** deprecate component ([a422469](https://github.com/dynamic-framework/dynamic-ui/commit/a4224696c92b17eb9241614d0d7756a807d22413))


### Bug Fixes

* **DToast:** set soft style as bootstrap way ([20ea57a](https://github.com/dynamic-framework/dynamic-ui/commit/20ea57a334a75047b57d42c620feaf8b96b7b4bb))
* **styles:** remove align property on d-close class ([78f7b30](https://github.com/dynamic-framework/dynamic-ui/commit/78f7b30fe2ee5ca2a8d2e6c3919b815b23d858ca))


### Storybook

* **DAlert:** set message in english ([d7c05a1](https://github.com/dynamic-framework/dynamic-ui/commit/d7c05a100292ba46ad977e7675bc23ca8747c2fb))
* remove unnecessary documentation in favor of ui documentation ([#707](https://github.com/dynamic-framework/dynamic-ui/issues/707)) ([128c6db](https://github.com/dynamic-framework/dynamic-ui/commit/128c6dbc2b5f390b914e1b5bc8ac1976fd9e4256))



## [1.28.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.28.0...@dynamic-framework/ui-react@1.28.1) (2024-07-26)


### Bug Fixes

* external jest setup and internal preset ([708d938](https://github.com/dynamic-framework/dynamic-ui/commit/708d938d61b4cead2706b77758fc842572b074ae))



## [1.28.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.27.0...@dynamic-framework/ui-react@1.28.0) (2024-07-25)


### Style Features

* **style:** enable bootstrap css grid ([f85273c](https://github.com/dynamic-framework/dynamic-ui/commit/f85273c8635d110374f70d0fcdc6b19ae7f903e4))


### Features

* add external setupJest.js ([96f3045](https://github.com/dynamic-framework/dynamic-ui/commit/96f30451d395990d127abc13257a8c1102fdbec5))
* **DDatePicker:** add icon state support ([7d83c87](https://github.com/dynamic-framework/dynamic-ui/commit/7d83c87bb34081dc95d9ebcfb89ec89f0e94a379))
* **DDatePicker:** add render custom header prop ([88fa31a](https://github.com/dynamic-framework/dynamic-ui/commit/88fa31a004f7d68f82625d65b6f702e402d328ee))
* **useDToast:** add theme colors variant ([5917549](https://github.com/dynamic-framework/dynamic-ui/commit/59175490f747da6a03e93f5c540907fae00084c4))


### Bug Fixes

* **DInput:** adjust label icon size value ([097f2a4](https://github.com/dynamic-framework/dynamic-ui/commit/097f2a4573f4940382c3ad5f370da0dfb42b8ca0))
* **DInputPin:** avoid run onChange inside setState ([109a2eb](https://github.com/dynamic-framework/dynamic-ui/commit/109a2eba83a7e6060b4f9dcb3995728ac56956d6))
* set badge on toast pattern and add toast as peer deps ([#690](https://github.com/dynamic-framework/dynamic-ui/issues/690)) ([90f0be9](https://github.com/dynamic-framework/dynamic-ui/commit/90f0be974f06b4024636e3eadd61987963941c00))
* **useDToast:** avoid required toast props and set example ([ffae7d5](https://github.com/dynamic-framework/dynamic-ui/commit/ffae7d5534dbe5c359c703b6ee28ccef8dd88b1c))


### Storybook

* add dynamic framework ui logo ([#698](https://github.com/dynamic-framework/dynamic-ui/issues/698)) ([9df00f1](https://github.com/dynamic-framework/dynamic-ui/commit/9df00f13e88332d4291aba3dc882441110c3b0bb))
* **useDToast:** add detailed examples ([9bd738c](https://github.com/dynamic-framework/dynamic-ui/commit/9bd738c7271b07000e045aed21e9915a745db09c))



## [1.27.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.26.0...@dynamic-framework/ui-react@1.27.0) (2024-07-04)


### Style Features

* **style:** add d-close class and use instead of btn-close class on modal, offcanvas and toast ([8e68ce0](https://github.com/dynamic-framework/dynamic-ui/commit/8e68ce0488424f0015db14b5617eae3754243bba))
* **style:** adjust button colors and focus style ([9cb4d8a](https://github.com/dynamic-framework/dynamic-ui/commit/9cb4d8ac18368baa59a157dbe794be489a8db5fc))
* **style:** adjust DInput and compositions design ([cceb4ff](https://github.com/dynamic-framework/dynamic-ui/commit/cceb4ff79929323eb9249e815dcb4fa4c4bcad7b))
* **style:** adjust DInputCheck design ([33576b5](https://github.com/dynamic-framework/dynamic-ui/commit/33576b562ec92f42aea9df6fcdef9b5799ff515e))
* **style:** adjust DInputSwitch design and compositions ([dd1006b](https://github.com/dynamic-framework/dynamic-ui/commit/dd1006bfe01e0dad2a39f35f4e5d4389f9783cf9))
* **style:** adjust input focus and feedback state ([3c6f206](https://github.com/dynamic-framework/dynamic-ui/commit/3c6f2068879ae7105f409e3ecb4459356d5bd322))


### Features

* add d-close class and use instead of btn-close class on modal, offcanvas and toast ([03a5213](https://github.com/dynamic-framework/dynamic-ui/commit/03a5213ead74ee3769955953a4a829d62eede7b1))
* change toast element type to native toast type ([8da2181](https://github.com/dynamic-framework/dynamic-ui/commit/8da2181d1af354436ed887380bd9d67713839300))
* **DIconButton:** create component, test and stories ([#532](https://github.com/dynamic-framework/dynamic-ui/issues/532)) ([c61389c](https://github.com/dynamic-framework/dynamic-ui/commit/c61389c93c7339b695f5dcdf5c144e065cf19865))
* **DInput:** add size support ([1c5fcac](https://github.com/dynamic-framework/dynamic-ui/commit/1c5fcac6854fb6d5cce25ac700ea60f72f36a4eb))
* **DInputCheck:** add invalid and valid props ([6a9a0c8](https://github.com/dynamic-framework/dynamic-ui/commit/6a9a0c82f50e119e47f26bf90086cc58a67f9af5))
* **DInputSelect:** add size support ([6d4abfb](https://github.com/dynamic-framework/dynamic-ui/commit/6d4abfbdaf790b1cd0af6415fa649b9602cd99d1))
* **DInputSwitch:** add invalid and valid props ([4b7e5e6](https://github.com/dynamic-framework/dynamic-ui/commit/4b7e5e6c32ad74505b93899ea2d04f291b046a8a))
* **DStepper:** set completed steps flag ([#686](https://github.com/dynamic-framework/dynamic-ui/issues/686)) ([9175d50](https://github.com/dynamic-framework/dynamic-ui/commit/9175d50f14fe3d5677ce019f18a19f0430ec5918))
* **DTableHead:** add table head component with sort functionality ([616e7e0](https://github.com/dynamic-framework/dynamic-ui/commit/616e7e0540731094e03f1ebf06e42944b39b2b59))
* replace react-toastify for react-hot-toast ([b9225a0](https://github.com/dynamic-framework/dynamic-ui/commit/b9225a0dfb39d73790510561ad83699c4e83475d))
* support multiple format style to currency format ([#684](https://github.com/dynamic-framework/dynamic-ui/issues/684)) ([c79b9ad](https://github.com/dynamic-framework/dynamic-ui/commit/c79b9ad6bcc63a39fc0c4074086117472bdaf74c))


### Style Fixes

* **style:** change label color to gray-700 ([cc7708f](https://github.com/dynamic-framework/dynamic-ui/commit/cc7708fbda58cea9820da8d1ec0c3298c4292624))
* **style:** rollback body color to gray-900 ([9a8abca](https://github.com/dynamic-framework/dynamic-ui/commit/9a8abca025a93a1f46ee60f1521e2dec30de3aa1))
* **style:** rollback gray colors ([2cf9ae5](https://github.com/dynamic-framework/dynamic-ui/commit/2cf9ae5022a979afed13d511e0f2b5c40b52421e))


### Bug Fixes

* **DButtonIcon:** add export of component ([81ee659](https://github.com/dynamic-framework/dynamic-ui/commit/81ee659dfb93b3b3a696a858c569c1ddba0de4cc))
* **DPortalContext:** close offcanvas portal ([53233ac](https://github.com/dynamic-framework/dynamic-ui/commit/53233ac600d2eb76d8327dae16b260a4e4603e06))
* **DSelect:** add invalid and valid icon support ([6b54f14](https://github.com/dynamic-framework/dynamic-ui/commit/6b54f141657281935d3f7f2807820c3ef5bfafc0))
* **DSelect:** set zindex as bootstrap dropdown ([10ac153](https://github.com/dynamic-framework/dynamic-ui/commit/10ac153bfac4a75a2e7ebddf05db8b43a1492211))
* **DSelect:** take icon state from DContext icon map ([4ff338d](https://github.com/dynamic-framework/dynamic-ui/commit/4ff338da6c20d3aeaa06a3453a5e97fe940ddce8))


### Storybook

* add size argType to DInput and compositions ([46ddc06](https://github.com/dynamic-framework/dynamic-ui/commit/46ddc062a858cbaaee740b17e5e6f2e4f51dd55b))
* add tables example ([84a666d](https://github.com/dynamic-framework/dynamic-ui/commit/84a666d3ecc47ddd4a15617f50343532eae18786))
* change code example to dark mode ([8c90483](https://github.com/dynamic-framework/dynamic-ui/commit/8c90483efde95ba8ddbbc5c4618b6fde2828ca3e))
* **DButtonIcon:** rename story ([94d419a](https://github.com/dynamic-framework/dynamic-ui/commit/94d419a0040c51ecefaae2f0b2bd0e7d67fe9129))
* **DInputCheck:** add valid and invalid story ([908ded8](https://github.com/dynamic-framework/dynamic-ui/commit/908ded8d8f4fe543bad7b5913f4d1a12669d49fa))
* **DInputRadio:** add valid and invalid story ([de7d042](https://github.com/dynamic-framework/dynamic-ui/commit/de7d042b059dcb05081c19fe42e893bc12cb2ac9))
* **DInputSwitch:** add valid and invalid story ([c52fe90](https://github.com/dynamic-framework/dynamic-ui/commit/c52fe90262e2f74e18bb6e7aa1e26189d00ff45c))
* **DSelect:** add invalid and valid story ([7fc3f1c](https://github.com/dynamic-framework/dynamic-ui/commit/7fc3f1c433223328b30e4c8003ebe8f5464f5c7d))
* **DToast:** add to autodocs ([2a90c1d](https://github.com/dynamic-framework/dynamic-ui/commit/2a90c1d6050e146f1b5bc4646db27fbe8d30ea88))
* set export on code example of useModal and useOffcanvas ([c8fd894](https://github.com/dynamic-framework/dynamic-ui/commit/c8fd89495d2dcb1a575358ceb77bc5df78d171b2))
* update default toast story ([f4c45a0](https://github.com/dynamic-framework/dynamic-ui/commit/f4c45a0eb04b444aee3342269c068c8beb220985))
* update toast story with different examples ([872d237](https://github.com/dynamic-framework/dynamic-ui/commit/872d237c2b1152dfc28b26eef0e4c17d336c671a))
* **useDToast:** update toast story with visible prop and dismiss on custom ([a27a5a2](https://github.com/dynamic-framework/dynamic-ui/commit/a27a5a258f1296760069718ad46ee309ff4aeb4e))



## [1.26.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.25.0...@dynamic-framework/ui-react@1.26.0) (2024-06-17)


### Style Features

* **style:** adjust DInputRange style ([2724ed6](https://github.com/dynamic-framework/dynamic-ui/commit/2724ed67df1ecc05dad1448bf7dc6f95c24d82e4))
* **style:** move style to change the color of form-range track to the class form-range-filled-value ([cbbff75](https://github.com/dynamic-framework/dynamic-ui/commit/cbbff75556f82bc9afd3ef0deea83a5997c27ca8))


### Features

* **DInputRange:** add component ([4d24ed5](https://github.com/dynamic-framework/dynamic-ui/commit/4d24ed563ea0a3ad6195dd819ef5decdef780aa5))
* **DInputRange:** add optional filled value to change the color of range track ([98b11d5](https://github.com/dynamic-framework/dynamic-ui/commit/98b11d556bb1df808100ebddecb9bf910f35cfc7))
* **DToast:** create component, test and stories ([8cb1e33](https://github.com/dynamic-framework/dynamic-ui/commit/8cb1e33559e697feb24fab3ada3532b21bf135e9))


### Style Fixes

* **style:** select menu z-index ([38a38db](https://github.com/dynamic-framework/dynamic-ui/commit/38a38dbcf0c17cc66bf762c9d5c29cbae925f9e6))


### Bug Fixes

* **DInput:** adjust id usage ([0a0e3cf](https://github.com/dynamic-framework/dynamic-ui/commit/0a0e3cf92f904680a476e313ac04313ee65647a7))
* **DInputCheck:** adjust id usage ([58dce4e](https://github.com/dynamic-framework/dynamic-ui/commit/58dce4e5fde3dbc8dfe2cf49b0a69cc0fdacf708))
* **DInputPin:** adjust id usage ([587da8e](https://github.com/dynamic-framework/dynamic-ui/commit/587da8e0978db7efc4f761f2f145f3d0ffa7e285))
* **DInputSelect:** adjust id usage ([f4426ce](https://github.com/dynamic-framework/dynamic-ui/commit/f4426ce720fa322e066af698117c0b6ab521458d))
* **DInputSelect:** set invalid and valid states on form ([#668](https://github.com/dynamic-framework/dynamic-ui/issues/668)) ([49682ea](https://github.com/dynamic-framework/dynamic-ui/commit/49682ea0b3199fc0af2d376fb6e4976e5a2c790f))
* **DInputSwitch:** adjust id usage ([af8393a](https://github.com/dynamic-framework/dynamic-ui/commit/af8393a2030b568383aaec56cca5c009b7394f21))
* **DQuickActionCheck:** adjust id usage ([aaac4e3](https://github.com/dynamic-framework/dynamic-ui/commit/aaac4e3e149db21488b369b1a461fb3786eadfce))
* **DQuickActionSelect:** adjust id usage ([ee913a7](https://github.com/dynamic-framework/dynamic-ui/commit/ee913a7eab8a127a22033ab674d26d6de7153669))
* **DQuickActionSwitch:** adjust id usage ([39e32cc](https://github.com/dynamic-framework/dynamic-ui/commit/39e32cc3eb4833513a812bc8aa97b265c77c093c))
* **DTabs:** remove classname modifier from buttons in nav ([#667](https://github.com/dynamic-framework/dynamic-ui/issues/667)) ([88a95ff](https://github.com/dynamic-framework/dynamic-ui/commit/88a95ff8e6e86a19116d16e733e89bf44fedd177))


### Storybook

* **DInputRange:** add filledValue story and arg type ([0e2efab](https://github.com/dynamic-framework/dynamic-ui/commit/0e2efab15105d2a49b8dc1eafefeb6a1ec23a173))
* **DInputRange:** add storybook documentation ([444dcc5](https://github.com/dynamic-framework/dynamic-ui/commit/444dcc5e01a22afe06beb3cf0c3509248e6dd286))
* **DSelect:** add more documentation to each react-select property ([f1d51fe](https://github.com/dynamic-framework/dynamic-ui/commit/f1d51fe1b5946382b74833d55ece2dd4c143a06d))
* set abstraction and wrapper badges on components ([5ab5efb](https://github.com/dynamic-framework/dynamic-ui/commit/5ab5efb1066a0f7c033b3c9817b4caf5abc068ed))



## [1.25.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.24.0...@dynamic-framework/ui-react@1.25.0) (2024-05-31)


### Features

* **DPortalContext:** set support to close backdrop on modals ([#657](https://github.com/dynamic-framework/dynamic-ui/issues/657)) ([0be58e7](https://github.com/dynamic-framework/dynamic-ui/commit/0be58e7ae18ce9cbb9e6109e9592426365179383))



## [1.24.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.23.0...@dynamic-framework/ui-react@1.24.0) (2024-05-28)


### Features

* add support to -25 color and adjust gray palette colors ([b99df6b](https://github.com/dynamic-framework/dynamic-ui/commit/b99df6b9f245dfc764cc691f923b7587057ecc68))
* add text-bg palette support ([907ae7d](https://github.com/dynamic-framework/dynamic-ui/commit/907ae7dd4cda959771932c0639fac0e9c80924a9))


### Bug Fixes

* change badge classname soft to text-color-bg-color ([f0e7464](https://github.com/dynamic-framework/dynamic-ui/commit/f0e7464ec553cf5fd59d33a7a81f94098b71d941))


### Storybook

* add -25 colors base documentation ([c3e71ea](https://github.com/dynamic-framework/dynamic-ui/commit/c3e71eadced5d85132b22e1a4623f8a78cc03371))
* set palette vertically to avoid cluttering and overflow ([2d1f7a8](https://github.com/dynamic-framework/dynamic-ui/commit/2d1f7a84d7c78fb40e88c705f3ef6c0a8c98f674))



## [1.23.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.22.0...@dynamic-framework/ui-react@1.23.0) (2024-05-24)


### Style Features

* **style:** change button disabled opacity from 0.5 to 0.65 ([#660](https://github.com/dynamic-framework/dynamic-ui/issues/660)) ([07a612a](https://github.com/dynamic-framework/dynamic-ui/commit/07a612a89a0879f492016893cc1f3ed28d071c5d))


### Style Fixes

* **style:** remove component var from DTooltip style ([6bf5407](https://github.com/dynamic-framework/dynamic-ui/commit/6bf540721cfef4aa84e056d697eb67b632641e0b))


### Bug Fixes

* add node_modules/ to scss imports from node_modules and adjust scss build process ([050b187](https://github.com/dynamic-framework/dynamic-ui/commit/050b18704119e80f6e42936d4d9b9463c6f96461))
* **DInput:** set focus to input icons if icon method ([8e6d702](https://github.com/dynamic-framework/dynamic-ui/commit/8e6d702a42f0ca17b4c50943848129feebd46236))
* **DTooltip:** avoid tooltip content keep open when scroll ([5de77ba](https://github.com/dynamic-framework/dynamic-ui/commit/5de77baf25d983095131b4307fa13b0ac01fa28e))


### Storybook

* **DStepper:** set component usage and description ([09657d0](https://github.com/dynamic-framework/dynamic-ui/commit/09657d0210fcf077382cf2e5928457accb5ee4f9))



## [1.22.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.21.0...@dynamic-framework/ui-react@1.22.0) (2024-05-20)


### Features

* add recharts peer dependency ([9fc73de](https://github.com/dynamic-framework/dynamic-ui/commit/9fc73de4d144f05393fa4df989e23895ac708df9))
* **style:** add surface colors and adjust soft colors ([69a169e](https://github.com/dynamic-framework/dynamic-ui/commit/69a169e59de2f5dd10f50275a2231ef866e1d4ad))
* **style:** setup -50 colors and themes ([d46d7e5](https://github.com/dynamic-framework/dynamic-ui/commit/d46d7e5fe3a8287f1899f8c024469339c9f51c01))
* **style:** setup bootstrap colors and dynamic brand colors in purple and pink ([282fd1f](https://github.com/dynamic-framework/dynamic-ui/commit/282fd1f24d404184f9d44515df205f7afed90c47))
* **style:** setup bootstrap grays ([91447f8](https://github.com/dynamic-framework/dynamic-ui/commit/91447f8c73557a63088f5977d77e86d4a5dfb474))


### Bug Fixes

* **DTabs:** set variables as bootstrap and set available to all classes ([#651](https://github.com/dynamic-framework/dynamic-ui/issues/651)) ([e5ce3b2](https://github.com/dynamic-framework/dynamic-ui/commit/e5ce3b263ab0dd10f527d1f21fd7c7f785e970b4))
* **style:** change danger from orange to red ([8d71a11](https://github.com/dynamic-framework/dynamic-ui/commit/8d71a11325bfbd06e5ecd85b8ee39702e8b06fb0))


### Storybook

* add recharts example ([1ed9ba6](https://github.com/dynamic-framework/dynamic-ui/commit/1ed9ba6a03803babdba5ce31ad428e0b0dac2259))
* add surface colors and -50 themes and deprecate soft colors ([8ede0dc](https://github.com/dynamic-framework/dynamic-ui/commit/8ede0dc020c13fe4a625e687838098747e5a9ffe))
* add variable class owner on each component ([#652](https://github.com/dynamic-framework/dynamic-ui/issues/652)) ([9b48971](https://github.com/dynamic-framework/dynamic-ui/commit/9b48971bc78c752183bbb7afc4dd2368cc2cf68b))
* **DInputMask:** add react-input/mask usage through useState ([#650](https://github.com/dynamic-framework/dynamic-ui/issues/650)) ([8d050b7](https://github.com/dynamic-framework/dynamic-ui/commit/8d050b7e3a8037c775064329354c4845aa7c6b23))



## [1.21.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.20.0...@dynamic-framework/ui-react@1.21.0) (2024-05-10)


### Features

* add font sizes body utilities ([#639](https://github.com/dynamic-framework/dynamic-ui/issues/639)) ([c6fcc56](https://github.com/dynamic-framework/dynamic-ui/commit/c6fcc561cf654708f5c3562e66357b5beeb16553))
* adjust heading and display font sizes values ([#638](https://github.com/dynamic-framework/dynamic-ui/issues/638)) ([b989d4c](https://github.com/dynamic-framework/dynamic-ui/commit/b989d4ca2d8b3c727cc30bad1c2074f85e482f45))


### Storybook

* **DModal:** add more descriptive information about usage ([c53d7e7](https://github.com/dynamic-framework/dynamic-ui/commit/c53d7e7aa60cc667fd138f86c9d9d5cb1192e5f6))
* **DOffcanvas:** add more descriptive information about usage ([09a8db3](https://github.com/dynamic-framework/dynamic-ui/commit/09a8db36d9e1b6004d9ee11c86da37f567de1d3b))
* fix typo on classnames of DModal DOffcanvas and DToast ([04372b6](https://github.com/dynamic-framework/dynamic-ui/commit/04372b69b929f53075d3ad4f86ae7e3488a3c57c))
* set default variant as underline in DTabs ([b99098a](https://github.com/dynamic-framework/dynamic-ui/commit/b99098ad68b5c53c41b94a5c26d5b2845a47c8ac))
* set direct link to CSS variables over each bootstrap component ([#644](https://github.com/dynamic-framework/dynamic-ui/issues/644)) ([3357677](https://github.com/dynamic-framework/dynamic-ui/commit/33576775ce41cf3ec0c50907c525a8592ff26a44))



## [1.20.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.19.1...@dynamic-framework/ui-react@1.20.0) (2024-05-07)


### Features

* add valid and invalid state to DDatePicker ([#635](https://github.com/dynamic-framework/dynamic-ui/issues/635)) ([bbc2de0](https://github.com/dynamic-framework/dynamic-ui/commit/bbc2de09ead15d33f466b11f08cc793517a09a47))


### Bug Fixes

* ignore sent readOnly prop from DatePicker ([#637](https://github.com/dynamic-framework/dynamic-ui/issues/637)) ([1893be4](https://github.com/dynamic-framework/dynamic-ui/commit/1893be4c63c7d2f013fd6c862054309899aba5a5))
* remove form tag to avoid conflicts with outside forms and emit change function ([3c61eb2](https://github.com/dynamic-framework/dynamic-ui/commit/3c61eb283c1746434d91ef43c5a982b8cec032b1))
* set negative margin to balance DSelect menu list ([#636](https://github.com/dynamic-framework/dynamic-ui/issues/636)) ([d9cddc0](https://github.com/dynamic-framework/dynamic-ui/commit/d9cddc00f6b785ad257e0788b50bc6baf632ec14))



## [1.19.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.19.0...@dynamic-framework/ui-react@1.19.1) (2024-04-26)


### Bug Fixes

* adjust link hover color ([8098df6](https://github.com/dynamic-framework/dynamic-ui/commit/8098df67ae12b64e82d861d5bb307961472a799c))
* d input on time, width using available space ([58ee852](https://github.com/dynamic-framework/dynamic-ui/commit/58ee852774babe115ec5f9a9868002c9cd087a98))
* remove DPortalContextProvider export ([1defeb9](https://github.com/dynamic-framework/dynamic-ui/commit/1defeb9b9f34a489d895e8e68dff0474607e9cbb))



## [1.19.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.18.0...@dynamic-framework/ui-react@1.19.0) (2024-04-04)


### Features

* add avatar-group example and fix DContext story ([cf5ec68](https://github.com/dynamic-framework/dynamic-ui/commit/cf5ec685f18038a804de5622d03270f2e8c234f1))
* add breakpoints to fw ([b6d8778](https://github.com/dynamic-framework/dynamic-ui/commit/b6d87782451bb4596d4763b1be9b52d3379decd6))
* add breakpoints to fw ([3f394b5](https://github.com/dynamic-framework/dynamic-ui/commit/3f394b591009ff20fb2b534c817411f9b824475f))
* add support to DAvatar title property ([9a7ce93](https://github.com/dynamic-framework/dynamic-ui/commit/9a7ce93a659f02cd1105a7f98496d309e11db6d0))
* add support to use btn variables with variant and theme from root ([02151ce](https://github.com/dynamic-framework/dynamic-ui/commit/02151ce1c915df732b296d5d68b4c1e1a6394ed4))
* add support to visual stack modals and offcanvas ([0fa25a4](https://github.com/dynamic-framework/dynamic-ui/commit/0fa25a4fdea22aeff4b1e23df3c601e401c9d1b9))
* add transition props and example ([6c09022](https://github.com/dynamic-framework/dynamic-ui/commit/6c09022066e5d2c1539ab9e01004699177022473))
* avatar component ([d4a74a0](https://github.com/dynamic-framework/dynamic-ui/commit/d4a74a010578c2fd22ce08c9b8311f81b129b80e))
* change tooltip default color to bootstrap colors ([58c162b](https://github.com/dynamic-framework/dynamic-ui/commit/58c162bc1302959aedf3ca571b367da8f84948c2))
* define reference variables for font-size and use rfs as a value ([a278376](https://github.com/dynamic-framework/dynamic-ui/commit/a27837699110f1980f5b10997ca5e2633912b75f))
* font weight responsive ([a8f4b93](https://github.com/dynamic-framework/dynamic-ui/commit/a8f4b938ff1b7001b201afff1d72cac42934b4f2))
* font weight responsive ([63a7f6f](https://github.com/dynamic-framework/dynamic-ui/commit/63a7f6fc54a42e88aecda462901c73a84dc15b47))
* integrate tooltips with bootstrap tooltips ([4d8fb8b](https://github.com/dynamic-framework/dynamic-ui/commit/4d8fb8be32698b24a4898b5a9efbd48c3b5ca1f6))
* move the heading-line-height value to a css variable ([8e8f9a4](https://github.com/dynamic-framework/dynamic-ui/commit/8e8f9a454a8246c6f5da909b42063fec832c6164))
* re-enable rfs with fs in css variables and with support to direct values ([c5af3c2](https://github.com/dynamic-framework/dynamic-ui/commit/c5af3c2139c670289ded0f0c210bdc2900b0eaa6))
* text-truncate multiple lines ([#611](https://github.com/dynamic-framework/dynamic-ui/issues/611)) ([05f8c7f](https://github.com/dynamic-framework/dynamic-ui/commit/05f8c7fafe761ac951045b5b82264feb0dc76486))
* use css var to define font-size, font-weight and responsive support in hN, .fs-N, .hN, display-N, fw-V, small and .small ([c688c0d](https://github.com/dynamic-framework/dynamic-ui/commit/c688c0d477b044aa17bf918417b76d4d12f7a691))


### Bug Fixes

* adjust .btn-group-vertical .btn border-radius ([5dbb6fc](https://github.com/dynamic-framework/dynamic-ui/commit/5dbb6fc9cabd4f25893d8fdd823120cc889ccc72))
* adjust checkbox disable and indeterminate style and radio disable style ([2556c89](https://github.com/dynamic-framework/dynamic-ui/commit/2556c891b9a331ea7694c3fe08903f760cce7bc3))
* adjust form-check margin and use internal label of DInputSwitch on DQuickActionSwitch ([b0a0c44](https://github.com/dynamic-framework/dynamic-ui/commit/b0a0c44763b33ea3b01e0c37f6c35594331fe66f))
* adjust input padding with input-group-text siblings ([eea8995](https://github.com/dynamic-framework/dynamic-ui/commit/eea8995f6cf8ec17ac0fd5bf1ae3ad0339cd2d84))
* adjust ref-fw- var to fw- ([e0d3d36](https://github.com/dynamic-framework/dynamic-ui/commit/e0d3d36e85cd632749d35cab4d7b565a83d8ba63))
* adjust useStackState behavior and DPortalContext backdrop ([5152b59](https://github.com/dynamic-framework/dynamic-ui/commit/5152b597192be9e64bd7c70620b63e106e82cf34))
* change -fs-fs-small to -fs-small ([1bc73bf](https://github.com/dynamic-framework/dynamic-ui/commit/1bc73bf39e6149e0802b05d4212750336d525a91))
* change font size sm from rem to em ([763e524](https://github.com/dynamic-framework/dynamic-ui/commit/763e5240e0ad9021e72875e34163ad64b64452f2))
* DModal and DOffcanvas tests ([c602ee1](https://github.com/dynamic-framework/dynamic-ui/commit/c602ee1c9f9903bd08b63be6696e2f78829e77c8))
* override label options on DQuickActionSelect ([3546707](https://github.com/dynamic-framework/dynamic-ui/commit/35467070bd0e2c9de793fb044fece2986cbd431e))
* padding card body ([d8465f8](https://github.com/dynamic-framework/dynamic-ui/commit/d8465f8a03ed5eacf8e9de33d00d26147cd84e2c))
* pagination padding and tooltip default color ([36f08a6](https://github.com/dynamic-framework/dynamic-ui/commit/36f08a684ac065ef4f367f7f88458f43254a155e))
* remove ref prefix from fs css var ([36cb3f2](https://github.com/dynamic-framework/dynamic-ui/commit/36cb3f2afc01274335c5aeff14d1232279906d0e))
* spacing secondary actions on DQuickActionButton ([9d143af](https://github.com/dynamic-framework/dynamic-ui/commit/9d143afb12dba77ff8b6c0d03ce32527ff91c0b2))
* use display-font-size map key and not display ([53fe021](https://github.com/dynamic-framework/dynamic-ui/commit/53fe0213dffb57f7d4269592cb8607656b983dbe))
* use reference spacing on DQuickActionButton ([27d4f65](https://github.com/dynamic-framework/dynamic-ui/commit/27d4f65c86b03f7ad13416a3e055d358d75c335e))



## [1.18.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.17.1...@dynamic-framework/ui-react@1.18.0) (2024-03-14)


### Features

* take btn border radius from :root ([f943362](https://github.com/dynamic-framework/dynamic-ui/commit/f94336222431f90c3e71985598ecd8ca901c84b4))



## [1.17.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.17.0...@dynamic-framework/ui-react@1.17.1) (2024-03-14)


### Bug Fixes

* spacers doc and DStepperMobile margin ([5eab52c](https://github.com/dynamic-framework/dynamic-ui/commit/5eab52ca794de602b47cfec365bb751c5d9a8fca))



## [1.17.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.16.2...@dynamic-framework/ui-react@1.17.0) (2024-03-13)


### Features

* input with bootstrap ([194a4de](https://github.com/dynamic-framework/dynamic-ui/commit/194a4deadbc26b83100daebf650514237c5d5cc3))
* jump 4 by 4 in spacers ([ab93b9f](https://github.com/dynamic-framework/dynamic-ui/commit/ab93b9fade43ecfb4691f4d467eb8399e34d5f5e))
* overlay utility ([58d87de](https://github.com/dynamic-framework/dynamic-ui/commit/58d87de537ea60687a24b718908cc1b7f3a02d08))
* overlay utility ([5275edd](https://github.com/dynamic-framework/dynamic-ui/commit/5275edd72344864d046396cd60b530e18bdbfd0c))


### Bug Fixes

* adjust design of counter and disable wheel ([59938fd](https://github.com/dynamic-framework/dynamic-ui/commit/59938fd8b54d38f9f79bdb37a9dc0e52ced155b7))
* focus bg color and text color using hover values ([c7e4365](https://github.com/dynamic-framework/dynamic-ui/commit/c7e4365e44e2da16fe504c4d814c8524bb8fbc41))
* focus pagination ([9de69a7](https://github.com/dynamic-framework/dynamic-ui/commit/9de69a774377a3d072016a0a22b850896d71be41))
* focus pagination and padding ([a8a714f](https://github.com/dynamic-framework/dynamic-ui/commit/a8a714f6f39f6d6939a70ecfa159a1479cf85826))
* input-groups borders and focus ([811e60b](https://github.com/dynamic-framework/dynamic-ui/commit/811e60bf1a499360e1e596bc30fbc51b75c84806))
* pagination focus ([f26052e](https://github.com/dynamic-framework/dynamic-ui/commit/f26052e48013aa8d706438260b00738be53d214c))
* pagination size and padding ([89178b3](https://github.com/dynamic-framework/dynamic-ui/commit/89178b3a9ca01ecbdde283c36f80c3d002c536ae))
* remove ref and use pure spacer ([1acb036](https://github.com/dynamic-framework/dynamic-ui/commit/1acb0368386a9b00254cbac656f931fb78741a71))
* remove reset paragraph margin ([10561d1](https://github.com/dynamic-framework/dynamic-ui/commit/10561d1b795adeaec8d2f15e1fff853e1a9d6570))
* rename to singular input-group file ([9d2823f](https://github.com/dynamic-framework/dynamic-ui/commit/9d2823f2f6deb4b72fdfdbe745df4d0e0fd39d5b))



## [1.16.2](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.16.1...@dynamic-framework/ui-react@1.16.2) (2024-03-05)


### Bug Fixes

* -emphasis-color value ([56567d2](https://github.com/dynamic-framework/dynamic-ui/commit/56567d24f76185dbf5e5e4fe9bb54c5f0ab25ff9))
* card inner border radius calc ([fa4a5b6](https://github.com/dynamic-framework/dynamic-ui/commit/fa4a5b66ef45523b55df69f98fb48615424fe826))
* error with modal transition ([690b6ed](https://github.com/dynamic-framework/dynamic-ui/commit/690b6edebe3f4f8ffe747e0634ea19fa8e8a8ce4))
* margin form check ([c208024](https://github.com/dynamic-framework/dynamic-ui/commit/c2080240b7b259dbc4d026005a06461e842a4c50))
* padding correction for list-groups and bg white on offcanvas ([32206b8](https://github.com/dynamic-framework/dynamic-ui/commit/32206b89cd690bfb368a3b051ca332086771d6e5))
* remove duplicate var ([75228ad](https://github.com/dynamic-framework/dynamic-ui/commit/75228ad119ea79133f0544e2e9466e6f4b2176e0))
* tooltip background ([17f629f](https://github.com/dynamic-framework/dynamic-ui/commit/17f629f1676b7e35eb396aa708385fd97f590b06))



## [1.16.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.16.0...@dynamic-framework/ui-react@1.16.1) (2024-03-04)


### Bug Fixes

* adjust border radius ([8834013](https://github.com/dynamic-framework/dynamic-ui/commit/8834013edd2fa6ca09189b583221d20cfcc1512a))
* adjust border radius ([1ea7a30](https://github.com/dynamic-framework/dynamic-ui/commit/1ea7a30015b0aa1104a36a025ebdb2efb705adcb))
* build-scss script ([8389907](https://github.com/dynamic-framework/dynamic-ui/commit/83899074b30b3f67ec32c527878a0a8facfb79e0))
* change order line ([776d83c](https://github.com/dynamic-framework/dynamic-ui/commit/776d83c5c6ef2f0c93e9317a554f558653fcf5e2))
* enable shadows ([11499c4](https://github.com/dynamic-framework/dynamic-ui/commit/11499c49b244864498564a07c668fdfba19a23ee))
* fix forms dropdowns and borders ([77b735f](https://github.com/dynamic-framework/dynamic-ui/commit/77b735fa2c4e5e5d5424dfe0737bd2fb9e71d155))
* fix forms, dropdowns and borders ([1e542bb](https://github.com/dynamic-framework/dynamic-ui/commit/1e542bb2fc7b3055dcc861e0184393a50bbfa3a5))
* form-check height ([b9dad52](https://github.com/dynamic-framework/dynamic-ui/commit/b9dad526aee77236bbdffb70a1b0bef49b5a60e1))
* input-group , dropdowns and form-check ([bb4a75a](https://github.com/dynamic-framework/dynamic-ui/commit/bb4a75ab5cbba78192f4b61df7a94bae518a7017))
* style spacing ([5628e20](https://github.com/dynamic-framework/dynamic-ui/commit/5628e20107475170dd12b795d09d07c49326d6d6))



## [1.16.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.15.1...@dynamic-framework/ui-react@1.16.0) (2024-02-29)


### Features

* adjust css style of accordion ([3a86aa2](https://github.com/dynamic-framework/dynamic-ui/commit/3a86aa2972c6407545981da2acadff3c29d5a0dd))
* adjust style of DBadge component and css ([774b0b4](https://github.com/dynamic-framework/dynamic-ui/commit/774b0b470a34228666e4d25bc17bc87102e6064a))


### Bug Fixes

* adjust breadcrumb css style ([f6aea0f](https://github.com/dynamic-framework/dynamic-ui/commit/f6aea0ff1011f794444bb3bc07249f58fe01434e))
* adjust light and dark colors of soft badge and link button ([42b8615](https://github.com/dynamic-framework/dynamic-ui/commit/42b861546e9e4c3963730f31f592e443c10ecdad))
* DContext partial props on hook usage ([2d59615](https://github.com/dynamic-framework/dynamic-ui/commit/2d5961527910e551f16e027cbfd8a0cf8a2c17b4))
* import indent libraries/dynamic-ui-react/src/contexts/DContext.tsx ([0f21865](https://github.com/dynamic-framework/dynamic-ui/commit/0f21865d6095f470cd96ff387fa459a87bf33a81))
* remove comment libraries/dynamic-ui-react/src/style/components/_d-breadcrumb.scss ([9414f69](https://github.com/dynamic-framework/dynamic-ui/commit/9414f69cddeb1a045b00b26eed0ff4b254f86adb))



## [1.15.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.15.0...@dynamic-framework/ui-react@1.15.1) (2024-02-21)


### Bug Fixes

* adjust design details of root variables and buttons ([ff7f51f](https://github.com/dynamic-framework/dynamic-ui/commit/ff7f51fed5a347e2559486e6b33fa5cde0eab631))



## [1.15.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.14.1...@dynamic-framework/ui-react@1.15.0) (2024-02-15)


### Features

* add DSelect base support with DContext usage and adjust DInput feedback color ([4030cd5](https://github.com/dynamic-framework/dynamic-ui/commit/4030cd594f4cb179cc31987f0f755df318ee6929))
* add example to use DSelect with emoji and text single value and adjust DContext iconMap config ([1d75336](https://github.com/dynamic-framework/dynamic-ui/commit/1d753361417c4218d5ce03c82857c9f2c2687169))
* use calendar icons on DCalendar from DContext ([cc8823d](https://github.com/dynamic-framework/dynamic-ui/commit/cc8823d4e094a425b3d1c0139b0ec637026e2d9b))
* use close icon on box file from DContext and remove unnecesary icon suffix ([f6462e7](https://github.com/dynamic-framework/dynamic-ui/commit/f6462e745642b790487c4fecf2d46400c097e57e))
* use close icon on chip from DContext ([0e522b6](https://github.com/dynamic-framework/dynamic-ui/commit/0e522b6d6fccda8ff3422fddaa0bb3604df0afd6))
* use close icon on modal from DContext ([9f00063](https://github.com/dynamic-framework/dynamic-ui/commit/9f0006334bcd97f970d0230a8b16f2582645a4e9))
* use close icon on offcanvas from DContext ([28e8280](https://github.com/dynamic-framework/dynamic-ui/commit/28e8280cddfd3330fc2a06aebd433f201e56a12a))
* use DContext iconMap ([c2df6b7](https://github.com/dynamic-framework/dynamic-ui/commit/c2df6b7c062ff620e77b55099a212052df1616e8))
* use material icons on DButton from DContext ([b651c73](https://github.com/dynamic-framework/dynamic-ui/commit/b651c731bffcfdd088df650d25e0753e393c4336))
* use material style prop on DInput from DContext ([25a33af](https://github.com/dynamic-framework/dynamic-ui/commit/25a33afcacfc3e4e396e7037c24eff2b97e2a56f))
* use success icon on stepper from DContext ([8c881a9](https://github.com/dynamic-framework/dynamic-ui/commit/8c881a904088ffdc271fa892da0fa9c6b6bbfa62))
* use toggle icon on collapse from DContext ([2a32b12](https://github.com/dynamic-framework/dynamic-ui/commit/2a32b124dd188930d0e949c656ca20c8a5c25c6c))


### Bug Fixes

* text libraries/dynamic-ui-react/stories/components/DAlert.stories.tsx ([dc41394](https://github.com/dynamic-framework/dynamic-ui/commit/dc413945715f846b272877ff16ad1569ea44b24d))
* text on libraries/dynamic-ui-react/stories/components/DAlert.stories.tsx ([80891d7](https://github.com/dynamic-framework/dynamic-ui/commit/80891d78b65555047034d11b91533aefd89468d7))
* typo libraries/dynamic-ui-react/stories/components/DAlert.stories.tsx ([fdf4bb8](https://github.com/dynamic-framework/dynamic-ui/commit/fdf4bb8e01250318acab14e944ec82f71a443a01))
* typo libraries/dynamic-ui-react/stories/components/DTabs.stories.tsx ([10a03d1](https://github.com/dynamic-framework/dynamic-ui/commit/10a03d1be74e2974f2c182fffa87b0b86a453762))



## [1.14.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.14.0...@dynamic-framework/ui-react@1.14.1) (2024-01-30)


### Bug Fixes

* remove context ([f5048ce](https://github.com/dynamic-framework/dynamic-ui/commit/f5048cef55b87791d2723b3732e339c151538591))



## [1.14.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.13.0...@dynamic-framework/ui-react@1.14.0) (2024-01-12)


### Features

* add support to use icons with material config style and store the icon config on DContextProvider ([a5e0879](https://github.com/dynamic-framework/dynamic-ui/commit/a5e08793fd66e70cc765b20911a63d8b9caa728b))


### Bug Fixes

* DIcon color ([3698208](https://github.com/dynamic-framework/dynamic-ui/commit/3698208ac6facf434dacfca4d5af6939e1669a3e))



## [1.13.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.12.1...@dynamic-framework/ui-react@1.13.0) (2024-01-12)


### Features

* add support to set DContext on hook ([59e1ce3](https://github.com/dynamic-framework/dynamic-ui/commit/59e1ce334b551ef0ade6ed8b3d6af5f3ff9dc8a4))
* set disabled on counter limits ([09b282a](https://github.com/dynamic-framework/dynamic-ui/commit/09b282ae1168986dc9de93178517a6a1e5139aad))
* support props to disable icons ([29d6b24](https://github.com/dynamic-framework/dynamic-ui/commit/29d6b24fdc5281ebc97bf4daeb8b6692d94865fc))


### Bug Fixes

* DInput feedback colors ([3057717](https://github.com/dynamic-framework/dynamic-ui/commit/3057717dc6aeb43d030af908817e9bf6d14cf008))



## [1.12.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.12.0...@dynamic-framework/ui-react@1.12.1) (2023-12-15)


### Bug Fixes

* adjust line variable of DStepperDesktop ([fe9d2cc](https://github.com/dynamic-framework/dynamic-ui/commit/fe9d2cc0150918e46421d862f84dfe15b91f1d27))



## [1.12.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.11.1...@dynamic-framework/ui-react@1.12.0) (2023-12-15)


### Features

* add DInputMask component ([f9c06a8](https://github.com/dynamic-framework/dynamic-ui/commit/f9c06a8bc770dfed8883bc2e6b01106aa534c669))
* add form property to DButton ([1ec91d8](https://github.com/dynamic-framework/dynamic-ui/commit/1ec91d8c1d3e42eaee6fcbf39a437a3bf9ebf4ea))
* adjust behaviors of DModalContextProvider an DOffcanvasContextProvider ([79a264b](https://github.com/dynamic-framework/dynamic-ui/commit/79a264bc7d728eb460bfeeebaf92ddafd1a722ae))
* adjust modal and offcanvas header design, add portal class and rename modalSize property ([99c17bf](https://github.com/dynamic-framework/dynamic-ui/commit/99c17bf4b47871cc29ed4db21abae86bbbb1558a))
* adjust useModalContext example ([3d244de](https://github.com/dynamic-framework/dynamic-ui/commit/3d244de3c4067b5a960144ff3cc682228b064eee))
* adjust variables of DBoxFile ([113ba6d](https://github.com/dynamic-framework/dynamic-ui/commit/113ba6d5950514bdb18ec8fabdb380ebd60cf9c7))
* default show icon in DAlert ([2faccb5](https://github.com/dynamic-framework/dynamic-ui/commit/2faccb51cc23df1e68b6e78556a6b4635ed9ba98))
* DTooltip themes ([9ee207c](https://github.com/dynamic-framework/dynamic-ui/commit/9ee207c92db86af015945223da84d0ba0c231ce5))
* enable light and dark default bootstrap theme to DButton and btn-link css class ([4a34f9e](https://github.com/dynamic-framework/dynamic-ui/commit/4a34f9e6b329418f5256684be3d5fc57de6ab428))
* generate text-theme-code and bg-theme-code classes ([ccf83b9](https://github.com/dynamic-framework/dynamic-ui/commit/ccf83b9d727d05a157db060553c9992662f374ae))
* secure payload type on modal and offcanvas context usage ([a4e06a0](https://github.com/dynamic-framework/dynamic-ui/commit/a4e06a096bf60bb6d92633a33174bb3e1117f7cf))
* unify alerts and separate documentation for toast ([c26d7b7](https://github.com/dynamic-framework/dynamic-ui/commit/c26d7b76f4f4b2bff304bf82b2e20ad46f18516f))


### Bug Fixes

* className behavior on DInput ([43aa7a4](https://github.com/dynamic-framework/dynamic-ui/commit/43aa7a491fda1389a883f462c359c6b21393880c))



## [1.11.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.11.0...@dynamic-framework/ui-react@1.11.1) (2023-12-04)


### Bug Fixes

* DProgress value and className ([cd5fcdb](https://github.com/dynamic-framework/dynamic-ui/commit/cd5fcdb01641e881a17ee7ab1dcb8974080379a0))



## [1.11.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.10.0...@dynamic-framework/ui-react@1.11.0) (2023-12-01)


### Features

* add floating control ([2749c03](https://github.com/dynamic-framework/dynamic-ui/commit/2749c0331247f93cdf07ac5570eee25a21561011))
* adjust DInputPin tests ([0c4a421](https://github.com/dynamic-framework/dynamic-ui/commit/0c4a42169c95b3cdfe7801fb5d5748104ca9d14f))
* adjust useToast story ([58f40c8](https://github.com/dynamic-framework/dynamic-ui/commit/58f40c87b9019c565403c8af2867ed9da22ea85a))
* change DInputSelect api from selectedOption with object to value with value ([add2e07](https://github.com/dynamic-framework/dynamic-ui/commit/add2e0725442e164f9552d8c1b202b515a264c20))
* enable DAlert light and dark theme ([e875941](https://github.com/dynamic-framework/dynamic-ui/commit/e8759410c12837d845541b3c796ad8a397e0ad47))
* enable floating label on DInputCounter ([d6c6c40](https://github.com/dynamic-framework/dynamic-ui/commit/d6c6c40d8a1a488dc56172e3cf3aed78b2eee29c))
* remove default placeholder of DInputPin ([50c262a](https://github.com/dynamic-framework/dynamic-ui/commit/50c262a9b5269ab6916480dba4d79c7502df5df4))
* replace as floatingLabel prop ([8172311](https://github.com/dynamic-framework/dynamic-ui/commit/81723118ef1555ecd61170cf43722194143111f9))
* update stories ([52b159b](https://github.com/dynamic-framework/dynamic-ui/commit/52b159b5ec2833be00d9db0abac26ada9b4ed74a))


### Bug Fixes

* adjust DBoxFile DInput and DInputSelect api details ([71981fb](https://github.com/dynamic-framework/dynamic-ui/commit/71981fb06f97c692fbbc78b9265e702b905f5968))
* adjust DInputPin validation icon color ([40d4e45](https://github.com/dynamic-framework/dynamic-ui/commit/40d4e450f5ee495d877e536bacd450e8b36b5247))
* set icon rule on floating ([469d9e6](https://github.com/dynamic-framework/dynamic-ui/commit/469d9e6d913f8a2efdd7eecb498a8e9e6e1ba0bc))
* stylelint details on d-input-select.scss ([61505c2](https://github.com/dynamic-framework/dynamic-ui/commit/61505c2d8a736da7d66c2a3da905ef7f4ae7e334))



## [1.10.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.9.1...@dynamic-framework/ui-react@1.10.0) (2023-11-21)


### Features

* add ariaLabel to DButton ([7e7f8c9](https://github.com/dynamic-framework/dynamic-ui/commit/7e7f8c96bce28f0d0bad0f6912a31acddd467234))
* add ariaLabel to DInput icons ([868cffc](https://github.com/dynamic-framework/dynamic-ui/commit/868cffc0bbf2e6e06a216fd2d9bda7dff428f9a9))
* adjust a11y of DChip ([c1aa1e8](https://github.com/dynamic-framework/dynamic-ui/commit/c1aa1e8bb57b8e51976cb389180bd3944e2a73c1))
* adjust a11y of DDatePicker ([db9f559](https://github.com/dynamic-framework/dynamic-ui/commit/db9f559393f631f30dc6fdbbaa62922471fdfe8c))
* adjust a11y of DInput and DInputSearch ([0622f28](https://github.com/dynamic-framework/dynamic-ui/commit/0622f28c01cb9436d6e1fa847c0e0082084e0ff4))
* adjust a11y of DInputCheck ([c1a18f7](https://github.com/dynamic-framework/dynamic-ui/commit/c1a18f7ddc8220a04e6d12f167ea56384bce1257))
* adjust a11y of DInputPassword ([c3fe255](https://github.com/dynamic-framework/dynamic-ui/commit/c3fe255f28185efaf3858c6dc99c29ac460841c0))
* adjust a11y of DInputSwitch ([edea4a9](https://github.com/dynamic-framework/dynamic-ui/commit/edea4a9a3594498e127cbc4d109b60d6817aeab1))
* adjust a11y of DQuickActionButton ([581ba46](https://github.com/dynamic-framework/dynamic-ui/commit/581ba46e239cb676303e625952e47a2eff223033))
* adjust a11y to DChip ([9dc12a1](https://github.com/dynamic-framework/dynamic-ui/commit/9dc12a1d47f330f1125055be10281194adcc596f))
* adjust a11y to DInputCounter ([45f4b45](https://github.com/dynamic-framework/dynamic-ui/commit/45f4b45e2a11e574d7d4d23c15bab52adca64ca0))
* adjust a11y to DInputSelect and adjust test ([31e6e57](https://github.com/dynamic-framework/dynamic-ui/commit/31e6e5718768b3610d7c9352e88cf1ceb720f5c7))
* adjust and chage DAlert to DAlert and create a DAlertBox ([f236edf](https://github.com/dynamic-framework/dynamic-ui/commit/f236edf582a1afff823677f7e498fb6a420586b4))
* adjust stories of DButton DDatepicker and DInput ([dc6937d](https://github.com/dynamic-framework/dynamic-ui/commit/dc6937dd80d922bd53558960cf3321889a0855fd))
* adjust story of DInput, DInputCurrencyBase and DInputCurrency ([5a7abf6](https://github.com/dynamic-framework/dynamic-ui/commit/5a7abf68b7259f21e72ce9b26c0c8b1027cc6a58))
* rename is<Properties> properties to <properties> ([9295437](https://github.com/dynamic-framework/dynamic-ui/commit/929543701846de5bf32510bb9886c71347ef230f))
* review accesibility of DButton and adjust some properties to use the same api of DInput ([3a26691](https://github.com/dynamic-framework/dynamic-ui/commit/3a266910241605fc5862bcab3b73f9da479fd565))
* use FamilyIconProps on DAlertBox ([30b8a24](https://github.com/dynamic-framework/dynamic-ui/commit/30b8a2433f6043b8e89f7453bd91925130f2baa6))


### Bug Fixes

* adjust DButton default, outline and link style ([4427ed2](https://github.com/dynamic-framework/dynamic-ui/commit/4427ed23dfe658f3190390d141f9ffb9f77afc48))
* adjust test ([493e720](https://github.com/dynamic-framework/dynamic-ui/commit/493e7203475d3adc2d84802cbbf391d3c74136ec))
* remove console.log and adjust import ([70f57a2](https://github.com/dynamic-framework/dynamic-ui/commit/70f57a2e4b953a7800c560ef01aa59d78e4821b8))



## [1.9.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.9.0...@dynamic-framework/ui-react@1.9.1) (2023-11-02)


### Bug Fixes

* adjust DPopover min with content ([0a87526](https://github.com/dynamic-framework/dynamic-ui/commit/0a875269646b44b894692ff088f1507237042866))



## [1.9.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.8.1...@dynamic-framework/ui-react@1.9.0) (2023-11-02)


### Features

* adjust DPopover content on small viewport size ([4ad6e8e](https://github.com/dynamic-framework/dynamic-ui/commit/4ad6e8eee02046ecd99a9467f8dac7f908277ab8))


### Bug Fixes

* change border value when input has value ([1efa73e](https://github.com/dynamic-framework/dynamic-ui/commit/1efa73eb949d03b5f6ba62c21e6f187914cc475d))
* d-input currency on change behavior ([6facb6e](https://github.com/dynamic-framework/dynamic-ui/commit/6facb6eccce25dd722e0914489251be606efed56))
* DAlert classname ([e40a4f7](https://github.com/dynamic-framework/dynamic-ui/commit/e40a4f73ddc606a3f97427c153d5740a429c26a5))
* use the same root var to the border radios of arrow and pages in DPaginator ([6114578](https://github.com/dynamic-framework/dynamic-ui/commit/6114578e3de5aff50c42b21c526865eab87c99da))



## [1.8.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.8.0...@dynamic-framework/ui-react@1.8.1) (2023-10-26)


### Bug Fixes

* d-input change event value ([72b3e13](https://github.com/dynamic-framework/dynamic-ui/commit/72b3e1336515b22ef918ec96852bb29e41eaa12c))



## [1.8.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.7.3...@dynamic-framework/ui-react@1.8.0) (2023-10-25)


### Features

* add base property to some components ([59cc048](https://github.com/dynamic-framework/dynamic-ui/commit/59cc04801c156f717ca2d70d895c875c3e41e57c))
* add classname and style as baseprops ([bcd0e8d](https://github.com/dynamic-framework/dynamic-ui/commit/bcd0e8d9bbf13f7a8a5815823f93d54920659e8d))
* change d-input to uncontrolled component, delete liquid and formik ([2618562](https://github.com/dynamic-framework/dynamic-ui/commit/26185628dff01b3cd80011508b5a9100b4273cfc))
* export a non-root css artifact ([a3d2472](https://github.com/dynamic-framework/dynamic-ui/commit/a3d24723028f9277bbf6954ad33199735148868e))
* refactor d-input related components ([668c965](https://github.com/dynamic-framework/dynamic-ui/commit/668c965dd9465a535fd6937a525c2d9eea4186ee))
* remove types of navigator share and liquid ([286fc51](https://github.com/dynamic-framework/dynamic-ui/commit/286fc511d5ba25205add4a1d20043ab3eddd84fc))
* rename common props suffix and add BaseProps ([c4ff3f0](https://github.com/dynamic-framework/dynamic-ui/commit/c4ff3f09ba6f2a7700ee4b03ab982f556078abba))
* update d-input-counter click callbacks ([66bfd26](https://github.com/dynamic-framework/dynamic-ui/commit/66bfd2678c91d138f4796e30c4439ff11cc14ade))


### Bug Fixes

* adjust test of DIcon related components ([84dbb9c](https://github.com/dynamic-framework/dynamic-ui/commit/84dbb9cbba3685d32b8094c1c72c88442032adfa))
* component import order ([825bdf0](https://github.com/dynamic-framework/dynamic-ui/commit/825bdf0b34f86a2ee2758dfdc8344fb1b4cf4c58))
* input test details ([3b0d0ee](https://github.com/dynamic-framework/dynamic-ui/commit/3b0d0ee95402abb024cdb45852f1cc3cb0ff79cd))
* spacing ([c4c1a3d](https://github.com/dynamic-framework/dynamic-ui/commit/c4c1a3d73404add0bfd6775afe9e15a843531add))
* spacing imports ([aa8283d](https://github.com/dynamic-framework/dynamic-ui/commit/aa8283d4b615b4bd899db1db413a252316dd9464))
* take RefObject from import ([a8eb9a1](https://github.com/dynamic-framework/dynamic-ui/commit/a8eb9a140c4f40fc1d15c9327811ae94d85a9ba1))



## [1.7.3](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.7.2...@dynamic-framework/ui-react@1.7.3) (2023-10-18)


### Bug Fixes

* add className to DInputCurrencyBase and generic type to DInputSearch change event ([4264942](https://github.com/dynamic-framework/dynamic-ui/commit/4264942c18df28cfcaf3dbfb5d8a467732c92a67))



## [1.7.2](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.7.1...@dynamic-framework/ui-react@1.7.2) (2023-10-18)

**Note:** Version bump only for package @dynamic-framework/ui-react





## [1.7.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.7.0...@dynamic-framework/ui-react@1.7.1) (2023-10-18)


### Bug Fixes

* add className to DOffcanvas ([45c2375](https://github.com/dynamic-framework/dynamic-ui/commit/45c23752dbbc8df3a25177c117ad1ed758c7af98))
* DInputCurrecyBase optional label and DInputSelect className ([8db416b](https://github.com/dynamic-framework/dynamic-ui/commit/8db416bd86816757dba6b074ba947aa7c83b8e4f))



## [1.7.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.6.0...@dynamic-framework/ui-react@1.7.0) (2023-10-18)


### Features

* adjust DPopover story and add flag to adjust content to render ([19b3c7e](https://github.com/dynamic-framework/dynamic-ui/commit/19b3c7ee10df24e2bdf19d7f620f07e7875f4c08))
* move styles and remove angular, vue and stencil packages ([7f1f155](https://github.com/dynamic-framework/dynamic-ui/commit/7f1f155a639f40f54411958f0171d823b4c21ecd))
* move utils from ui package to react package ([4fe7bc3](https://github.com/dynamic-framework/dynamic-ui/commit/4fe7bc30cd8656d882c462efcad7832f7004aeba))
* refactor DAlert from stencil to react ([41f4f8e](https://github.com/dynamic-framework/dynamic-ui/commit/41f4f8ec22de115dde8a2c91378c490282fa6648))
* refactor DBadge from stencil to react ([d3678e6](https://github.com/dynamic-framework/dynamic-ui/commit/d3678e6cb63d143afef1011b7dedc195c94d6176))
* refactor DButton from stencil to react ([1fc85ac](https://github.com/dynamic-framework/dynamic-ui/commit/1fc85acdd8c93f5f738535788e104a6a546d6b8d))
* refactor DChip from stencil to react ([87caa82](https://github.com/dynamic-framework/dynamic-ui/commit/87caa82117ad7a5a9648f76157a5fa0d34d71823))
* refactor DIcon from stencil to react ([3cad9c2](https://github.com/dynamic-framework/dynamic-ui/commit/3cad9c2681ccf128d20ece7199a8dfb578e3d6a6))
* refactor DInput from stencil to react ([0c851cd](https://github.com/dynamic-framework/dynamic-ui/commit/0c851cd514139225db597dbb28549c74ef7f983f))
* refactor DInputCheck from stencil to react ([520a59c](https://github.com/dynamic-framework/dynamic-ui/commit/520a59c782879b613ead0100e54411985d82e857))
* refactor DInputCounter from stencil to react ([8400bfa](https://github.com/dynamic-framework/dynamic-ui/commit/8400bfa867fb934ae0d1a98b4b7f87bdad0a5e47))
* refactor DInputCurrency from stencil to react ([52b1ee7](https://github.com/dynamic-framework/dynamic-ui/commit/52b1ee7d759b98222c8cb38a42f1342550e8d515))
* refactor DInputCurrencyBase from stencil to react ([cfebe3e](https://github.com/dynamic-framework/dynamic-ui/commit/cfebe3e61029784db67913d954da281f8c5ae08c))
* refactor DInputPassword from stencil to react ([de6134e](https://github.com/dynamic-framework/dynamic-ui/commit/de6134e3a6c79a1487c88c80f76534da05d0b1fd))
* refactor DInputPin from stencil to react ([6766e10](https://github.com/dynamic-framework/dynamic-ui/commit/6766e10244294e82e70ed10226a8fd903a64ef3d))
* refactor DInputSearch from stencil to react ([a5dc1b9](https://github.com/dynamic-framework/dynamic-ui/commit/a5dc1b90243b1fb276b9b7fa315c2f95e5aebc60))
* refactor DInputSelect from stencil to react ([767a65e](https://github.com/dynamic-framework/dynamic-ui/commit/767a65eaf9c6fce35d8bf891e63653ae371d89a7))
* refactor DInputSwitch from stencil to react ([ebec342](https://github.com/dynamic-framework/dynamic-ui/commit/ebec342dca31fd9dfd64991f66e603c8666335ba))
* refactor DModal from stencil to react ([7fa0ec8](https://github.com/dynamic-framework/dynamic-ui/commit/7fa0ec866c3faf8dc8acf61378398cc9baf3527a))
* refactor DOffcanvas from stencil to react ([2e534ae](https://github.com/dynamic-framework/dynamic-ui/commit/2e534ae9a3ac7eb3017064018b77b94b9f238a41))
* refactor DProgress from stencil to react ([015fdce](https://github.com/dynamic-framework/dynamic-ui/commit/015fdce20dfed108b56b06108e3b91772ca0b553))
* refactor DQuickActionButton from stencil to react ([8fe5751](https://github.com/dynamic-framework/dynamic-ui/commit/8fe5751d4357c9ea2d2e7fa282bdfe386ef6e4c4))
* refactor DQuickActionCheck from stencil to react ([9725ed6](https://github.com/dynamic-framework/dynamic-ui/commit/9725ed6907a9ae9045249d58c6bbffcd35942e5f))
* refactor DQuickActionSelect from stencil to react ([db857ac](https://github.com/dynamic-framework/dynamic-ui/commit/db857acf9988c9d043069fd8c4e259ebe1ebadc0))
* refactor DQuickActionSwitch from stencil to react ([e454c96](https://github.com/dynamic-framework/dynamic-ui/commit/e454c962d50d4bb0e3617b4cd083a2963490f30b))
* refactor innerId, events and import path ([f6eea93](https://github.com/dynamic-framework/dynamic-ui/commit/f6eea93e85247e25c0273bf65fcc9705c276f1f3))
* remove stencil output from react package ([e6d434b](https://github.com/dynamic-framework/dynamic-ui/commit/e6d434b27df728d62aaef731a26c51162f2ca745))


### Bug Fixes

* adjust styles after updating stylelint library ([d5a3fb3](https://github.com/dynamic-framework/dynamic-ui/commit/d5a3fb30501358bccabd329eaaebbcb4cd3e4adf))



## [1.6.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.5.0...@dynamic-framework/ui-react@1.6.0) (2023-09-15)


### Features

* adjust dynamic-react css vars and scss build process ([ff35f2f](https://github.com/dynamic-framework/dynamic-ui/commit/ff35f2f88c073261465d4cc4dcb993a29378a1b4))
* dstepper component ([c96552e](https://github.com/dynamic-framework/dynamic-ui/commit/c96552e60f0c2821bd55aa5471889b0f898e0376))
* stepper mobile ([fd4ea9f](https://github.com/dynamic-framework/dynamic-ui/commit/fd4ea9f4fc2888dc5aa69603a5398118a7ed1e7c))



## [1.5.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.4.0...@dynamic-framework/ui-react@1.5.0) (2023-09-07)


### Features

* change sp to small and text-gray to text-gray-500 ([000b16f](https://github.com/dynamic-framework/dynamic-ui/commit/000b16f17b448059397bb663a79a5de28fc6e49c))


### Bug Fixes

* adjust d-modal style and remove display:block ([2e56f46](https://github.com/dynamic-framework/dynamic-ui/commit/2e56f46e2fe392a4b5f061ab1c2f8ec16eb4a4ac))



## [1.4.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.3.1...@dynamic-framework/ui-react@1.4.0) (2023-09-01)


### Features

* change buttons scss generation to use var colors and adjust colors documentation ([3d44445](https://github.com/dynamic-framework/dynamic-ui/commit/3d44445aec863f4b6c1b0d06f142faf9269c2c74))



## [1.3.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.3.0...@dynamic-framework/ui-react@1.3.1) (2023-08-30)

**Note:** Version bump only for package @dynamic-framework/ui-react





## [1.3.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.2.2...@dynamic-framework/ui-react@1.3.0) (2023-08-30)


### Features

* adjust d-refactor ([8fd3e8e](https://github.com/dynamic-framework/dynamic-ui/commit/8fd3e8edd1829e131b624486bec6426510e26e64))
* remove unnecessary color classes and utilities ([e64dc94](https://github.com/dynamic-framework/dynamic-ui/commit/e64dc941191e1eefecbc439100865397303e0675))
* update alert name ([778ec85](https://github.com/dynamic-framework/dynamic-ui/commit/778ec85ce13c33f9d6cb140264010fe1d8fa22e6))
* update box-file name ([d30db8e](https://github.com/dynamic-framework/dynamic-ui/commit/d30db8e3a14e630e6b3f649793887a837e4e9993))
* update button name, pill behavior and some css variables ([4983b4e](https://github.com/dynamic-framework/dynamic-ui/commit/4983b4e0cc5960109403e6bb0d474c9606d26d42))
* update card and related components name ([6575035](https://github.com/dynamic-framework/dynamic-ui/commit/6575035707cf8e39f163f126d7b91d7093bacafe))
* update carousel and related components name ([643aef9](https://github.com/dynamic-framework/dynamic-ui/commit/643aef9b20965c7dc1eecf29b8c35e134c6ff07d))
* update chip and badge name ([c451566](https://github.com/dynamic-framework/dynamic-ui/commit/c4515660d56909ce4c3e9b919854e21b041d36d7))
* update collapse and related components name ([5691957](https://github.com/dynamic-framework/dynamic-ui/commit/5691957f0aca08df3512b55fa1d80ca249d1d24b))
* update currency text and related components name ([86a977c](https://github.com/dynamic-framework/dynamic-ui/commit/86a977c52b45d36508bd8e660ded023726731499))
* update icon name ([c3225dc](https://github.com/dynamic-framework/dynamic-ui/commit/c3225dcc49d25dea92f8d4d7be812d7e8873c2e4))
* update input and all input related components name ([bde7313](https://github.com/dynamic-framework/dynamic-ui/commit/bde73131e53a58275ef5958decde76908a531d32))
* update input-check and all quick-action-check name ([9346658](https://github.com/dynamic-framework/dynamic-ui/commit/9346658effc4762f9cec1959967f797da54250cb))
* update input-pin name and aquick-action-check classes ([2ec8dea](https://github.com/dynamic-framework/dynamic-ui/commit/2ec8deaabcbb8f76e37e607f9bed952aa2cc267b))
* update input-select and formik-input-select name ([193bdc9](https://github.com/dynamic-framework/dynamic-ui/commit/193bdc93ac93742257c66b3bc5ff874fc1ab7dbd))
* update input-switch and quick-action-switch name ([6d5adda](https://github.com/dynamic-framework/dynamic-ui/commit/6d5adda4fd3484090ca756692f8a789a78cf68b2))
* update list and related components name ([88b06b8](https://github.com/dynamic-framework/dynamic-ui/commit/88b06b8e696fa685c137e3ef929b98f8049d94cc))
* update modal and modal context name ([a9bd6d4](https://github.com/dynamic-framework/dynamic-ui/commit/a9bd6d4857c746d1edd8b5d91011e001fd57d6ed))
* update offcanvas and offcanvas context name ([4151f9f](https://github.com/dynamic-framework/dynamic-ui/commit/4151f9f1d157faef48eccad221d48731e9baf722))
* update paginator component name ([f391690](https://github.com/dynamic-framework/dynamic-ui/commit/f3916901d4f16ecd8081afac05b372f132d86974))
* update popover component name and add support to re-enable event propagation on button ([e539aa6](https://github.com/dynamic-framework/dynamic-ui/commit/e539aa68c92e1be09a0f510eb33a8a9f4e95353d))
* update progress name ([7666078](https://github.com/dynamic-framework/dynamic-ui/commit/7666078fc73204aecedb37e86ca427e0e04c7fb2))
* update quick-action-select and quick-action-button name ([91c81a0](https://github.com/dynamic-framework/dynamic-ui/commit/91c81a0fd1cbef9f6695d8045952b7e29014ab83))
* update skeleton component name ([1b41399](https://github.com/dynamic-framework/dynamic-ui/commit/1b4139981077a2f630ad4af057bc6dcabb70ba46))
* update stepper component name ([b30f207](https://github.com/dynamic-framework/dynamic-ui/commit/b30f2075213e7c13b913df1219f2d28cf1e5b9f7))
* update tab and related component name ([73fb5ce](https://github.com/dynamic-framework/dynamic-ui/commit/73fb5ce5e34af1806f5414269f02ea20f6cff928))
* update tooltip component name ([88b260f](https://github.com/dynamic-framework/dynamic-ui/commit/88b260f5817ea4971d994698ab3cc761aff431a8))


### Bug Fixes

* style var reference ([b3b8f60](https://github.com/dynamic-framework/dynamic-ui/commit/b3b8f60ead5469625d49b690960bf8018ff46803))



## [1.2.2](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.2.1...@dynamic-framework/ui-react@1.2.2) (2023-08-29)


### Bug Fixes

* add paginator component ([9d3639a](https://github.com/dynamic-framework/dynamic-ui/commit/9d3639a8d45f5afc1e4097f16c9d4a145ad255a4))



## [1.2.1](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.2.0...@dynamic-framework/ui-react@1.2.1) (2023-08-24)


### Bug Fixes

* mdx height of datepicker example ([53f84dc](https://github.com/dynamic-framework/dynamic-ui/commit/53f84dcfcd4a41db4d2dc843cb9e5cf764b1edd9))
* optional onFocus and onBlur on m-input-currency ([bb632f0](https://github.com/dynamic-framework/dynamic-ui/commit/bb632f0f37d6ab688bbc8ed8193b31d67171f9a8))
* use css variables ([e29a7e1](https://github.com/dynamic-framework/dynamic-ui/commit/e29a7e1d981954b90aaff3a85d7a2edc31470329))



## [1.2.0](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.1.5...@dynamic-framework/ui-react@1.2.0) (2023-08-14)


### Features

* add m-formik-input-currency and adjust details of m-input-currency and m-input-currency-base ([bd87783](https://github.com/dynamic-framework/dynamic-ui/commit/bd877837518ef8b02ada37b43b9ccadb1b3c583c))
* react re-export of scss and liquidParser ([57fe305](https://github.com/dynamic-framework/dynamic-ui/commit/57fe3058fd75fe199edd00bf3c759ce29bdbc279))
* stepper ([21557e7](https://github.com/dynamic-framework/dynamic-ui/commit/21557e72bb54e91a83ab90dc0074f0b4efb57f04))


### Bug Fixes

* m-formik-input-currency component name ([05d4fee](https://github.com/dynamic-framework/dynamic-ui/commit/05d4fee6235d18ba2c8772c8741a5165b3861618))
* remove default value of actionIcon on m-quick-action-button ([11aaf36](https://github.com/dynamic-framework/dynamic-ui/commit/11aaf36d1b8c26556561a42bd3606f41f19533e3))
* remove duplicate dependencies ([86a6124](https://github.com/dynamic-framework/dynamic-ui/commit/86a61242951c14b1bd4e3a9c0bf2e745781e6ae5))
* remove file ([5624c92](https://github.com/dynamic-framework/dynamic-ui/commit/5624c927f9e1c5b017e2268625ed45031df861ff))
* remove file ([b4f5abf](https://github.com/dynamic-framework/dynamic-ui/commit/b4f5abfa05b40ce5e90892586eda75f741b4d9e9))
* rename directories ([e2e5a2a](https://github.com/dynamic-framework/dynamic-ui/commit/e2e5a2a2152e731d21d579329f83211bdca6a09d))
* type used in ComponentProps of MFormikInputCurrency story ([7d85164](https://github.com/dynamic-framework/dynamic-ui/commit/7d85164e6aef83d8bf87c7eed390e09fe1f9a2bd))
* typo ([747985f](https://github.com/dynamic-framework/dynamic-ui/commit/747985fdeea3d9d80b21d7d97452ce29ad854e68))



## [1.1.5](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.1.4...@dynamic-framework/ui-react@1.1.5) (2023-08-04)

**Note:** Version bump only for package @dynamic-framework/ui-react





## [1.1.4](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.1.3...@dynamic-framework/ui-react@1.1.4) (2023-07-27)

**Note:** Version bump only for package @dynamic-framework/ui-react





## [1.1.3](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.1.2...@dynamic-framework/ui-react@1.1.3) (2023-07-27)

**Note:** Version bump only for package @dynamic-framework/ui-react





## [1.1.2](https://github.com/dynamic-framework/dynamic-ui/compare/@dynamic-framework/ui-react@1.1.1...@dynamic-framework/ui-react@1.1.2) (2023-07-27)

**Note:** Version bump only for package @dynamic-framework/ui-react





## 1.1.1 (2023-07-26)

**Note:** Version bump only for package @dynamic-framework/ui-react





## [1.1.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@1.0.1...@modyo-dynamic/modyo-design-system-react@1.1.0) (2023-07-04)

### Features

- add m-box-file base ([4838b6c](https://github.com/dynamic-framework/dynamic-ui/commit/4838b6cde22e92818861647b0f3e29eb12bdc48d))
- add modal footerActionPlacement center ([b76d04b](https://github.com/dynamic-framework/dynamic-ui/commit/b76d04b92f6f4f4c7ce4321ef63c4b1d2f630d88))
- adjust branding and resolve all // TODO docs ([b596900](https://github.com/dynamic-framework/dynamic-ui/commit/b59690047d4f5dd2a2bd3dbd88af377693f1c000))
- adjust design of m-box-file ([5567c89](https://github.com/dynamic-framework/dynamic-ui/commit/5567c8966e30948f21d23b1ab64fe18c92772b9c))

### Bug Fixes

- m-quick-action-button image border-radius and person list example ([a058e47](https://github.com/dynamic-framework/dynamic-ui/commit/a058e4782675d6080f6bc6f7f37397e71f36cb96))
- stop propagation ([52e8e7f](https://github.com/dynamic-framework/dynamic-ui/commit/52e8e7f5c25c8840eda046d2134079a99ef35285))

## [1.0.1](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@1.0.0...@modyo-dynamic/modyo-design-system-react@1.0.1) (2023-06-14)

**Note:** Version bump only for package @dynamic-framework/ui-react

## [1.0.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.10.1...@modyo-dynamic/modyo-design-system-react@1.0.0) (2023-06-14)

### ⚠ BREAKING CHANGES

- include src/style in package

### Features

- add cursor pointer to selectable quick actions and adjust story ([1352b6a](https://github.com/dynamic-framework/dynamic-ui/commit/1352b6a2dc4b7c1babe9b31eb9a3622c5c259745))
- add flag to hide value of the m-progress-bar ([f2fa7ce](https://github.com/dynamic-framework/dynamic-ui/commit/f2fa7ce1ff4cce00eacd7059cf71ebff66a7c26b))
- add iconography ([190d985](https://github.com/dynamic-framework/dynamic-ui/commit/190d9855a39442cc0195eb16d84b2ece9872a473))
- add m-quick-action-select story arg types details ([80a7485](https://github.com/dynamic-framework/dynamic-ui/commit/80a748599ec88291863db1246abcfd449608bd30))
- adjust contrast colors, m-alert colors and m-progress without value or small value ([d4ec085](https://github.com/dynamic-framework/dynamic-ui/commit/d4ec0851d7e1e6f66421ffd7cfabc8777fc5d14a))
- adjust design of m-tabs and m-quick-action-buttom, refactor m-dropdown to m-popover ([382b28a](https://github.com/dynamic-framework/dynamic-ui/commit/382b28a0885ddee8ad1c8b7f2a9824babff24fc0))
- adjust m-progress-bar design, m-alert base colors and icons and blue color, change bootstrap to stable version and stylelint config ([9a1f0d8](https://github.com/dynamic-framework/dynamic-ui/commit/9a1f0d85b44ae4d7c72cac1e0d61aa4f20a99b0b))
- adjust offcanvas header align ([3dbd6b9](https://github.com/dynamic-framework/dynamic-ui/commit/3dbd6b96607f74284e5d5bb2ab5710eb1c1f3917))
- adjust properties of m-icon and docs ([d1f30e1](https://github.com/dynamic-framework/dynamic-ui/commit/d1f30e1c0df386501c41a9d108a6317f36eb6e70))
- base m-button homologation ([265c8bb](https://github.com/dynamic-framework/dynamic-ui/commit/265c8bbe2cbd871c4f896d3245fd51b9f667f49e))
- colors, spacing and typography homologation ([4204bd3](https://github.com/dynamic-framework/dynamic-ui/commit/4204bd3caf0441dbf8b7cfb84e01a7f2069358ee))
- m-alert homologation ([d1d5cf8](https://github.com/dynamic-framework/dynamic-ui/commit/d1d5cf811867d560fef2d42e29b8ba3b73e24ba8))
- m-alert homologation adjust ([3de7681](https://github.com/dynamic-framework/dynamic-ui/commit/3de76813937c4f2c2346355ae02baa11327ad75c))
- m-alert support to custom icon ([a17bc37](https://github.com/dynamic-framework/dynamic-ui/commit/a17bc37d34f7faed1279239a138b5b602380337a))
- m-badge homologation ([076430b](https://github.com/dynamic-framework/dynamic-ui/commit/076430bef50d38a7994c5aa060e13beaceeb8968))
- m-border homologation ([c7b4742](https://github.com/dynamic-framework/dynamic-ui/commit/c7b47429402f3201f03068625e9dae602342bbfa))
- m-button homologation ([6b73859](https://github.com/dynamic-framework/dynamic-ui/commit/6b73859a2423df94cda04a9f6836b96deb01e76b))
- m-button m-quick-action-button and m-quick-action-switch adjust ([46d274f](https://github.com/dynamic-framework/dynamic-ui/commit/46d274f0f6a8abdeb05b02c1d1ab03bdbd115fdb))
- m-calendar style in react-package and m-collapse-icon-text homologation ([273b037](https://github.com/dynamic-framework/dynamic-ui/commit/273b0378602f24450884b071dbbd519a8c5f729d))
- m-chip component ([47341c9](https://github.com/dynamic-framework/dynamic-ui/commit/47341c963f9a83053fe23985303afc41fe549031))
- m-counter homologation and adjust css variables of m-input ([fecff94](https://github.com/dynamic-framework/dynamic-ui/commit/fecff94e55630d22d5e66d6e08d4a22ffabebef9))
- m-currency homologation w/o display currency information ([4ee36ac](https://github.com/dynamic-framework/dynamic-ui/commit/4ee36ac046c69d291aa733851933b4a8278e2c1c))
- m-dropdown homologation ([81ac351](https://github.com/dynamic-framework/dynamic-ui/commit/81ac35155bf476dab699b93f10912a1ad96539b5))
- m-formik-input and m-formik-input-select homologation ([e05f082](https://github.com/dynamic-framework/dynamic-ui/commit/e05f0828b93c8dd00c911fd3691a26a274ad9216))
- m-icon homologation ([eb3f740](https://github.com/dynamic-framework/dynamic-ui/commit/eb3f7408eb275fabd169bb7f1c6c9000f9f445d5))
- m-input homologation and m-input-password and m-input-search ([3f05f1c](https://github.com/dynamic-framework/dynamic-ui/commit/3f05f1ccdb922d7f7697f075717031c96a65fb92))
- m-input-check homologation ([013d897](https://github.com/dynamic-framework/dynamic-ui/commit/013d89787218b09e2e5bf9bf3a2b4b7de0ce8da0))
- m-input-pin homologation ([b050768](https://github.com/dynamic-framework/dynamic-ui/commit/b0507686ddca9e1ac3948f876808b660367114bd))
- m-input-switch homologation ([ff178c4](https://github.com/dynamic-framework/dynamic-ui/commit/ff178c49858655c924f3f0aa77dbaa40a10322a1))
- m-offcanvas and m-modal homologation ([ed4a7f0](https://github.com/dynamic-framework/dynamic-ui/commit/ed4a7f0f0a45947cde3bdabdb32d6da24be09969))
- m-progress-bar homologation ([0c653ba](https://github.com/dynamic-framework/dynamic-ui/commit/0c653bab1893893fb9678cff8ffc40e6a4875c13))
- m-quick-action box shadow, feat: remove default icons ([e6a0030](https://github.com/dynamic-framework/dynamic-ui/commit/e6a0030034e6991a34f79e9c24729301cc1f4039))
- m-quick-action homologation ([2c45550](https://github.com/dynamic-framework/dynamic-ui/commit/2c455503dd25709c889e40fdb1acfd9897ea5f47))
- m-quick-action-check homologation ([4314716](https://github.com/dynamic-framework/dynamic-ui/commit/43147161fe98cc7aee04d3be20b28eb0b4f36af1))
- m-quick-action-select homologation and adjust story of m-quick-action-button ([326c65b](https://github.com/dynamic-framework/dynamic-ui/commit/326c65b4dd278b16bfc1eae87e3a55849643e50e))
- m-quick-action-switch refactor ([559c22a](https://github.com/dynamic-framework/dynamic-ui/commit/559c22a8ba085cbefdae2c819c1ce227c681b2b4))
- m-quik-action-switch homologation and adjust other quick-actions and m-input-switch details ([9b7592f](https://github.com/dynamic-framework/dynamic-ui/commit/9b7592f3bfc79c43b6acb4297cb284acacc29cb3))
- m-skeleton homologation ([bf717d7](https://github.com/dynamic-framework/dynamic-ui/commit/bf717d79ca47a6951cc3cce14461ef0c22481bb3))
- m-tabs homologation ([8426751](https://github.com/dynamic-framework/dynamic-ui/commit/8426751f8fcf40428e1e8be4cda1d2d42ee55691))
- m-tooltip homologation and add some reference css variables ([c9ab3e8](https://github.com/dynamic-framework/dynamic-ui/commit/c9ab3e882df0fe5b07fa0e8bac70ad9085880798))
- remove m-host from m-icon ([e6c277d](https://github.com/dynamic-framework/dynamic-ui/commit/e6c277d11a9bf699e9009b104ae92bfdc0e406e7))
- remove stencil style generation and add some components homologation ([73ba759](https://github.com/dynamic-framework/dynamic-ui/commit/73ba75991b9f634dbfe843d3aa4d826c3e8ff635))
- separate documentation of m-input ([0d8bd9e](https://github.com/dynamic-framework/dynamic-ui/commit/0d8bd9e6249b98b1710cdf4332563a9b879448c9))

### Bug Fixes

- adjust m-icon tests ([893fd42](https://github.com/dynamic-framework/dynamic-ui/commit/893fd42a3e90a60c715d5f67b695faf7c9042e08))
- m-tab active font-weight and m-popover isOpen type ([cdbb5ad](https://github.com/dynamic-framework/dynamic-ui/commit/cdbb5add2e2cee1071c5c8e1b8a630083b0f2105))
- react import of variables and adjust m-collapse vars ([e31cad7](https://github.com/dynamic-framework/dynamic-ui/commit/e31cad7e3d5c99c6bfbaf271b12e54eb89acedba))
- remove workspace and .m-icon-host ([99103fd](https://github.com/dynamic-framework/dynamic-ui/commit/99103fdadf973620223833b8361157c324ab4284))
- tests ([5046b55](https://github.com/dynamic-framework/dynamic-ui/commit/5046b55545c8a8cbe0203d08fa5bb5e055d22265))

### Miscellaneous Chores

- include src/style in package ([7801b07](https://github.com/dynamic-framework/dynamic-ui/commit/7801b079058f44a7315651f9f372a8e6c5fa8354))

## [0.10.1](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.10.0...@modyo-dynamic/modyo-design-system-react@0.10.1) (2023-05-17)

### Bug Fixes

- event type on change ([a74516d](https://github.com/dynamic-framework/dynamic-ui/commit/a74516d0b7a149f1a64b5d77143929780a7b28e2))
- remove unused import ([afc8c9a](https://github.com/dynamic-framework/dynamic-ui/commit/afc8c9ae7dc0effa90990633728da037c1b3aaba))

## [0.10.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.9.0...@modyo-dynamic/modyo-design-system-react@0.10.0) (2023-05-09)

### Features

- permission group component ([fa3de56](https://github.com/dynamic-framework/dynamic-ui/commit/fa3de569cd122686a3b8ecb1fcb24793466e1dbb))
- permission item component ([4fe407f](https://github.com/dynamic-framework/dynamic-ui/commit/4fe407facba056ffd97b5c02537dc23b8c369945))
- summary card component ([1575da5](https://github.com/dynamic-framework/dynamic-ui/commit/1575da567ffff55003824b3cd8be525d0c47f3ef))

## [0.9.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.8.2...@modyo-dynamic/modyo-design-system-react@0.9.0) (2023-04-20)

### Features

- MCollapse custom component ([68ed23a](https://github.com/dynamic-framework/dynamic-ui/commit/68ed23a0a257aea21d1bff7d382b329fb6120b91))

## [0.8.2](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.8.1...@modyo-dynamic/modyo-design-system-react@0.8.2) (2023-03-29)

### Bug Fixes

- adjust style of m-toat ([e3c61a0](https://github.com/dynamic-framework/dynamic-ui/commit/e3c61a0b89f7ef9b8a1830f6f2cfd9b435636d9c))
- remove boxShadow style of m-toast container ([ba4f81f](https://github.com/dynamic-framework/dynamic-ui/commit/ba4f81f225e9f3c98794f9a5e741870bf7eec0d7))
- stories type ([bf52a40](https://github.com/dynamic-framework/dynamic-ui/commit/bf52a40991ceb04e7353c53bc8a471f3150adb14))

## [0.8.1](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.8.0...@modyo-dynamic/modyo-design-system-react@0.8.1) (2023-03-23)

### Bug Fixes

- internal and external collapse toggle ([dc3e2d2](https://github.com/dynamic-framework/dynamic-ui/commit/dc3e2d28985bb83c393e2160a1842b305f039a65))

### Reverts

- Revert "chore: remove useEffect" ([2e1d27e](https://github.com/dynamic-framework/dynamic-ui/commit/2e1d27e4792d6d21ebe77766cc781dc39231475c))

## [0.8.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.7.0...@modyo-dynamic/modyo-design-system-react@0.8.0) (2023-03-07)

### Features

- add m-pin component ([a02d173](https://github.com/dynamic-framework/dynamic-ui/commit/a02d17341b6973090aefd0cfc7299e92265e4fe4))

## [0.7.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.6.0...@modyo-dynamic/modyo-design-system-react@0.7.0) (2023-02-21)

### Features

- add m-collapse component and styles ([5cc0216](https://github.com/dynamic-framework/dynamic-ui/commit/5cc021622fc3a37936334d4078cb33cac5473ebf))
- add progress bar component ([144d3f5](https://github.com/dynamic-framework/dynamic-ui/commit/144d3f5013fa24eb093fdb843b433dc5a7028255))

## [0.6.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.5.4...@modyo-dynamic/modyo-design-system-react@0.6.0) (2023-02-15)

### Features

- add hooks to download, share and take a screenshot ([1ab6a30](https://github.com/dynamic-framework/dynamic-ui/commit/1ab6a304016b0cb3212272fd3050a2690e455a33))
- setup storybook publish on gh pages ([5da3826](https://github.com/dynamic-framework/dynamic-ui/commit/5da3826880bb39ebe4bb5d55a18fc48f978e6a0b))

## [0.5.4](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.5.3...@modyo-dynamic/modyo-design-system-react@0.5.4) (2023-02-06)

### Bug Fixes

- declare LANG into component ([ae21a5c](https://github.com/dynamic-framework/dynamic-ui/commit/ae21a5c405832a7ae90ffe65ce57dc378d7e3d1d))

## [0.5.3](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.5.2...@modyo-dynamic/modyo-design-system-react@0.5.3) (2023-01-27)

**Note:** Version bump only for package @dynamic-framework/ui-react

## [0.5.2](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.5.1...@modyo-dynamic/modyo-design-system-react@0.5.2) (2023-01-24)

**Note:** Version bump only for package @dynamic-framework/ui-react

## [0.5.1](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/modyo-design-system-react@0.5.0...@modyo-dynamic/modyo-design-system-react@0.5.1) (2023-01-20)

**Note:** Version bump only for package @dynamic-framework/ui-react

## 0.5.0 (2023-01-05)

### Features

- add aside component ([29c6ff7](https://github.com/dynamic-framework/dynamic-ui/commit/29c6ff750c987b02cd2f20a1582a6618168751c0))
- add aside context ([488af9a](https://github.com/dynamic-framework/dynamic-ui/commit/488af9ab107ea6ba53efc3c56b92e85b04f82bb4))
- add input and select components for formik ([ae6be27](https://github.com/dynamic-framework/dynamic-ui/commit/ae6be27a450313a2fded7ce769840c9c212d439f))
- add m-currency-text to format currency with component ([b59adad](https://github.com/dynamic-framework/dynamic-ui/commit/b59adad873fae5fa256eb803fda42678807e1fb7))
- add m-dropdown component in react library ([becdb7f](https://github.com/dynamic-framework/dynamic-ui/commit/becdb7feb0bbeca524438da28366fe85e25a8918))
- add name and blur to m-input ([53e9fc6](https://github.com/dynamic-framework/dynamic-ui/commit/53e9fc6450f8128e904a48479cf343fd810185ab))
- add utils to mock and make request abortables ([cd6edb5](https://github.com/dynamic-framework/dynamic-ui/commit/cd6edb5b4fb1715dff1773c3cfa6efee90199136))
- adjust modal callback conditions and add style to m-toast-container ([f33184b](https://github.com/dynamic-framework/dynamic-ui/commit/f33184b7faedb607571aafcdb5a241b48810f8db))
- base m-input invalid feedback ([00769b8](https://github.com/dynamic-framework/dynamic-ui/commit/00769b83e680e87ea84563169ab8e3525255418a))
- change close and icon to showClose and showIcon ([b3a101d](https://github.com/dynamic-framework/dynamic-ui/commit/b3a101ddc2e684c7fbb508bd5a83b30f7003eea8))
- MTooltip component ([d4d0d96](https://github.com/dynamic-framework/dynamic-ui/commit/d4d0d96e3c2e08f336f1a39362824b979e3cd4aa))
- normalize components api ([a1ce460](https://github.com/dynamic-framework/dynamic-ui/commit/a1ce4602d7fb6fbae6765cd1b9c925cbdaccc832))

### Bug Fixes

- adjust button properties ([3cc5189](https://github.com/dynamic-framework/dynamic-ui/commit/3cc5189ed1a692429d71ae512d0a1521e0890850))
- set key to values map ([2b1f5fe](https://github.com/dynamic-framework/dynamic-ui/commit/2b1f5fe3adad7327455e1b1b4774c2d023c4d661))

## [0.4.0](https://github.com/dynamic-framework/dynamic-ui/compare/@modyo-dynamic/react-design-system@0.3.0...@modyo-dynamic/react-design-system@0.4.0) (2022-09-26)

### Features

- add m-tabs components in react library ([49b3fff](https://github.com/dynamic-framework/dynamic-ui/commit/49b3fffc0dc6a26ba357ef7e00a2071dd75ca759))
- add showClose argument to toast ([177c18e](https://github.com/dynamic-framework/dynamic-ui/commit/177c18ee2bbeae1057e196416c26fb3cbad93e36))
- change toast usage ([396edce](https://github.com/dynamic-framework/dynamic-ui/commit/396edceb38680c2b0cddf1de017a4bfd3233a685))

## 0.3.0 (2022-09-26)

### Features

- add cmp m-badge ([05858d8](https://github.com/dynamic-framework/dynamic-ui/commit/05858d869115eb4ca6214f8348da1e1970f091ce))
- add m-counter component ([ab8fa4f](https://github.com/dynamic-framework/dynamic-ui/commit/ab8fa4f66949f8febdad4cb51e143f5f16ad84dd))
- add m-currency cmp ([eca1c03](https://github.com/dynamic-framework/dynamic-ui/commit/eca1c0377c5f42a9925bdce87b12844aa175675c))
- add m-hint component ([14e286c](https://github.com/dynamic-framework/dynamic-ui/commit/14e286caad9d2fe0675072c0409468c07defd7de))
- add m-list-item cmp ([5c6f959](https://github.com/dynamic-framework/dynamic-ui/commit/5c6f959acde0ed7fef0b94b190df25b185a3800b))
- add m-quick-action cmp ([b235eee](https://github.com/dynamic-framework/dynamic-ui/commit/b235eeee70a5c238d95d22defb6a6bb60e811853))
- add new componens ([0d517c0](https://github.com/dynamic-framework/dynamic-ui/commit/0d517c06b895580c5a61300d217f007840d18419))
- add new ds components ([ebed3e1](https://github.com/dynamic-framework/dynamic-ui/commit/ebed3e1a62cab89ac7cb30340444183115cdfe39))
- design system adjust for the first widget ([d65498a](https://github.com/dynamic-framework/dynamic-ui/commit/d65498a7328ba4a10d41b95b7a1074f84a6d3223))
- modal render integration ([3cc20b3](https://github.com/dynamic-framework/dynamic-ui/commit/3cc20b3afa7227d72e3a2cc41b31115b8bbf850d))
- move currency config to react-design-system ([680ba97](https://github.com/dynamic-framework/dynamic-ui/commit/680ba978c4ec46f135d623ec2d95ec725451b7bb))

### Bug Fixes

- children type ([25a62c0](https://github.com/dynamic-framework/dynamic-ui/commit/25a62c047ec0229987776133ae04171239f0709b))
- eslint problem and adjust modal config ([a461a9d](https://github.com/dynamic-framework/dynamic-ui/commit/a461a9dfd06f8cc86eb2d66ad763948493b68763))
- export function default ([e4e7864](https://github.com/dynamic-framework/dynamic-ui/commit/e4e78643c146aa17769681e871e10bfc5d24f43a))
- rebuild proxies ([bbe5b92](https://github.com/dynamic-framework/dynamic-ui/commit/bbe5b92f60fd6a8be6cf04e95c81b18f3de7e2a9))
- rebuild proxies ([e4fa783](https://github.com/dynamic-framework/dynamic-ui/commit/e4fa7836e8aa2d491151753e3ec55b8ef163131b))
- remove unused decalarations ([59f3270](https://github.com/dynamic-framework/dynamic-ui/commit/59f327096d56c648d376be39329d9d15cc152922))
- semicolon ([7766f40](https://github.com/dynamic-framework/dynamic-ui/commit/7766f40e18330db7f936f1ab6eb6c982dfdc0f97))
- semicolons ([cc73bba](https://github.com/dynamic-framework/dynamic-ui/commit/cc73bbaba4b7491be688602fb318f5ade8e3098c))
- semicolons ([e64d885](https://github.com/dynamic-framework/dynamic-ui/commit/e64d8855765590ee26513c81bacf9ee0eab7c84f))

### Reverts

- Revert "chore: bump versions [skip ci]" ([2200e91](https://github.com/dynamic-framework/dynamic-ui/commit/2200e915f10d9ce8dc36df66da0c2c6afa0945d2))
