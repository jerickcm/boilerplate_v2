<script>
import { ref, computed } from "vue";
import BreezeApplicationLogo from "../Components/ApplicationLogo.vue";
import BreezeDropdown from "../Components/Dropdown.vue";
import BreezeDropdownLink from "../Components/DropdownLink.vue";
import BreezeNavLink from "../Components/NavLink.vue";
import BreezeResponsiveNavLink from "../Components/ResponsiveNavLink.vue";
import { Head, Link, usePage } from "@inertiajs/inertia-vue3";
import Footer from "../Components/Footer/footer.vue";

export default {
    components: {
        Footer,
        BreezeApplicationLogo,
        BreezeDropdown,
        BreezeDropdownLink,
        BreezeNavLink,
        BreezeResponsiveNavLink,
        Link,
    },
    setup(props, { attrs, slots, emit, expose }) {
        const Auth_User = computed(() => usePage().props.value.auth.user);

        const permissions = usePage().props.value.auth.user.PermissionList;
        const showingNavigationDropdown = ref(false);
        return {
            Auth_User,
            showingNavigationDropdown,
            permissions,
        };
    },
};
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <BreezeApplicationLogo
                                        class="block h-9 w-auto"
                                    />
                                </Link>
                            </div>
                            <div
                                class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                            >
                                <span class="pt-5 font-extrabold"
                                    >City Government of Malolos -
                                    C.S.W.D.O.</span
                                >
                            </div>
                            <div
                                v-if="
                                    permissions.includes(
                                        'Access-Page-Dashboard'
                                    )
                                "
                                class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                            >
                                <BreezeNavLink
                                    :href="route('dashboard')"
                                    :active="route().current('dashboard')"
                                >
                                    <span class="text-base">Dashboard</span>
                                </BreezeNavLink>
                            </div>

                            <!-- Settings  -->
                            <div
                                class="hidden space-x-2 sm:-my-px sm:ml-1 sm:flex"
                            >
                                <BreezeDropdown width="48">
                                    <template #trigger>
                                        <button
                                            type="button"
                                            class="hidden pt-6 space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                        >
                                            <span>Settings</span>
                                            <svg
                                                class="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </template>

                                    <template #content>
                                        <div
                                            class="divide-y divide-slate-200 border-t-2 border-blue-200"
                                        >
                                            <div
                                                class="border-t-2 border-blue-200"
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-User'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    :href="route('user')"
                                                >
                                                    User
                                                </BreezeDropdownLink>
                                            </div>
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-Logs'
                                                    )
                                                "
                                                class="border-t-2 border-blue-200"
                                            >
                                                <BreezeDropdownLink
                                                    :href="route('logs')"
                                                >
                                                    Logs
                                                </BreezeDropdownLink>
                                            </div>
                                        </div>
                                    </template>
                                </BreezeDropdown>
                            </div>

                            <!-- Databases -->

                            <div
                                class="hidden space-x-2 sm:-my-px sm:ml-1 sm:flex"
                            >
                                <BreezeDropdown width="48">
                                    <template #trigger>
                                        <button
                                            type="button"
                                            class="hidden pt-6 space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                        >
                                            <span>Records</span>
                                            <svg
                                                class="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </template>

                                    <template #content>
                                        <div
                                            class="divide-y divide-slate-200 border-t-2 border-blue-200"
                                        >
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-SurveyForm'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="route('forms-index')"
                                                >
                                                    <strong
                                                        >Family Survey</strong
                                                    >
                                                    - Family Survey on Risks and
                                                    Vulnerability List/Records
                                                </BreezeDropdownLink>
                                            </div>

                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-ISF'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="route('isf-index')"
                                                >
                                                    (
                                                    <strong>I.S.F.</strong> and
                                                    <strong>I.E. </strong> )
                                                    Informal Settlers and
                                                    Illegal Encroachments
                                                    List/Records
                                                </BreezeDropdownLink>
                                            </div>

                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-PWD'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="route('pwd-index')"
                                                >
                                                    ( <strong>P.W.D.</strong>
                                                    ) - Person with Disability
                                                    List/Records
                                                </BreezeDropdownLink>
                                            </div>

                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-SoloParent'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="
                                                        route(
                                                            'soloparent-index'
                                                        )
                                                    "
                                                    ><strong>
                                                        Solo Parent</strong
                                                    >
                                                    : Solo Parent List/Records
                                                </BreezeDropdownLink>
                                            </div>
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-FarmersList'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="
                                                        route(
                                                            'farmerslist-index'
                                                        )
                                                    "
                                                >
                                                    <strong>Farmers</strong> :
                                                    Farmers List List/Records
                                                </BreezeDropdownLink>
                                            </div>
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-Iskolar'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="
                                                        route('isskolar-index')
                                                    "
                                                >
                                                    <strong>Isskolar</strong> :
                                                    Malolenyo Isskolar
                                                    List/Records
                                                </BreezeDropdownLink>
                                            </div>
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-SeniorCitizen'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="
                                                        route(
                                                            'seniorcitizen-index'
                                                        )
                                                    "
                                                >
                                                    <strong>
                                                        Senior Citizen
                                                    </strong>
                                                    : Senior Citizen List ( NSCS )
                                                    List/Records
                                                </BreezeDropdownLink>
                                            </div>
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-Pyap'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="route('pyap-index')"
                                                >
                                                    ( <strong>PYAP</strong> ) -
                                                    Pag-Asa Youth Association of
                                                    the Philippines List/Records
                                                </BreezeDropdownLink>
                                            </div>
                                            <div
                                                v-if="
                                                    permissions.includes(
                                                        'Access-Page-Toda'
                                                    )
                                                "
                                            >
                                                <BreezeDropdownLink
                                                    class="border-t-2 border-blue-200"
                                                    :href="route('toda-index')"
                                                >
                                                    ( <strong>TODA</strong> )
                                                    Tricycle Operation and
                                                    Drivers Association
                                                    List/Records
                                                </BreezeDropdownLink>
                                            </div>
                                        </div>
                                    </template>
                                </BreezeDropdown>
                            </div>

                            <div
                                class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                            >
                                <BreezeNavLink
                                    :href="route('about')"
                                    :active="route().current('about')"
                                >
                                    <span class="text-base">About</span>
                                </BreezeNavLink>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <BreezeDropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <BreezeDropdownLink
                                            :href="route('logout')"
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </BreezeDropdownLink>
                                    </template>
                                </BreezeDropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button
                                @click="
                                    showingNavigationDropdown =
                                        !showingNavigationDropdown
                                "
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex':
                                                !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex':
                                                showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->

                <div
                    :class="{
                        block: showingNavigationDropdown,
                        hidden: !showingNavigationDropdown,
                    }"
                    class="sm:hidden"
                >
                    <div
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                        v-if="permissions.includes('Access-Page-Dashboard')"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            Dashboard
                        </BreezeResponsiveNavLink>
                    </div>
                    <div
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                        v-if="permissions.includes('Access-Page-User')"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('user')"
                            :active="route().current('user')"
                        >
                            User
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-Logs')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('logs')"
                            :active="route().current('logs')"
                        >
                            Logs
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-SurveyForm')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('forms-index')"
                            :active="route().current('forms-index')"
                        >
                            Family Survey Form List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-ISF')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('isf-index')"
                            :active="route().current('isf-index')"
                        >
                            ISF and IE Page List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-PWD')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('pwd-index')"
                            :active="route().current('pwd-index')"
                        >
                            PWD List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-SoloParent')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('soloparent-index')"
                            :active="route().current('soloparent-index')"
                        >
                            SOLO PARENT List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-FarmersList')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('soloparent-index')"
                            :active="route().current('soloparent-index')"
                        >
                            Farmers List List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-Iskolar')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('soloparent-index')"
                            :active="route().current('soloparent-index')"
                        >
                            Isskolar List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-SeniorCitizen')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('soloparent-index')"
                            :active="route().current('soloparent-index')"
                        >
                            Senior Citizen List (NSCS) List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-Pyap')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('soloparent-index')"
                            :active="route().current('soloparent-index')"
                        >
                            ( PYAP ) Pag-Asa Youth Association List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div
                        v-if="permissions.includes('Access-Page-Toda')"
                        class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200"
                    >
                        <BreezeResponsiveNavLink
                            :href="route('soloparent-index')"
                            :active="route().current('soloparent-index')"
                        >
                            Tricycle Operation and Drivers Association (TODA)
                            List List/Records
                        </BreezeResponsiveNavLink>
                    </div>

                    <div class="pt-2 pb-3 space-y-1 border-t-2 border-blue-200">
                        <BreezeResponsiveNavLink
                            :href="route('about')"
                            :active="route().current('about')"
                        >
                            About
                        </BreezeResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->

                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">
                                {{ $page.props.auth.user.email }}
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <BreezeResponsiveNavLink
                                :href="route('logout')"
                                method="post"
                                as="button"
                            >
                                Log Out
                            </BreezeResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header
                class="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 shadow-inner border-b-4 border-blue-500"
                v-if="$slots.header"
            >
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 class="font-semibold text-xl text-white leading-tight">
                        <slot name="header" />
                    </h2>
                </div>
            </header>

            <!-- Page Content -->
            <div id="holder">
                <div id="body">
                    <main>
                        <slot />
                    </main>
                    <div style="min-height: 460px"></div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>
<style scoped>
.second-nav {
    background-image: url("../assets/images/bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
}

#holder {
    min-height: 100%;
    position: relative;
}

#body {
    padding-bottom: 100px; /* height of footer */
}

footer {
    height: 100px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>
