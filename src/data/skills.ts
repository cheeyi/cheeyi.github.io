export interface Skill {
	name: string;
	icon?: string;
}

export const devSkills: Skill[] = [
	{ name: 'Android', icon: 'simple-icons:android' },
	{ name: 'iOS', icon: 'simple-icons:apple' },
	{ name: 'Cross-Platform', icon: 'mdi:devices' },
	{ name: 'macOS', icon: 'simple-icons:macos' },
];

export const languageSkills: Skill[] = [
	{ name: 'Kotlin', icon: 'simple-icons:kotlin' },
	{ name: 'Swift', icon: 'simple-icons:swift' },
	{ name: 'Dart', icon: 'simple-icons:dart' },
	{ name: 'Java', icon: 'mdi:language-java' },
	{ name: 'Objective-C', icon: 'mdi:apple-keyboard-command' },
];

export const bluetoothSkills: Skill[] = [
	{ name: 'Android BLE API', icon: 'mdi:bluetooth' },
	{ name: 'iOS Core Bluetooth', icon: 'mdi:bluetooth-connect' },
	{ name: 'Protocol Design', icon: 'mdi:graph-outline' },
	{ name: 'OTA Firmware Updates', icon: 'mdi:cellphone-arrow-down' },
	{ name: 'AWS IoT', icon: 'simple-icons:amazonaws' },
];

export const architectureSkills: Skill[] = [
	{ name: 'System Design', icon: 'mdi:architecture' },
	{ name: 'Technical Leadership', icon: 'mdi:account-group' },
	{ name: 'MVVM', icon: 'mdi:layers-triple' },
	{ name: 'TDD', icon: 'mdi:test-tube' },
];

export const medicalDeviceSkills: Skill[] = [
	{ name: 'FDA Submissions', icon: 'mdi:file-document-check' },
	{ name: 'IEC 62304 Class A/B/C', icon: 'mdi:clipboard-pulse' },
];
