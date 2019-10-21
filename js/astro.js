var J2000 = 2451545,
	JulianCentury = 36525,
	JulianMillennium = 365250,
	AstronomicalUnit = 149597870,
	TropicalYear = 365.24219878;

function astor(a) {
	return a * (Math.PI / 648e3)
}

function dtr(a) {
	return a * Math.PI / 180
}

function rtd(a) {
	return 180 * a / Math.PI
}

function fixangle(a) {
	return a - 360 * Math.floor(a / 360)
}

function fixangr(a) {
	return a - 2 * Math.PI * Math.floor(a / (2 * Math.PI))
}

function dsin(a) {
	return Math.sin(dtr(a))
}

function dcos(a) {
	return Math.cos(dtr(a))
}

function mod(c, b) {
	return c - b * Math.floor(c / b)
}

function amod(c, b) {
	return mod(c - 1, b) + 1
}

function jhms(a) {
	var d;
	return d = 86400 * ((a += .5) - Math.floor(a)) + .5, [Math.floor(d / 3600), Math.floor(d / 60 % 60), Math.floor(d % 60)]
}
var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function jwday(a) {
	return mod(Math.floor(a + 1.5), 7)
}
var oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45];

function obliqeq(d) {
	var b, e, f, h;
	if (f = e = (d - J2000) / 3652500, b = 23.43929111111111, 1 > Math.abs(e))
		for (h = 0; 10 > h; h++) b += oterms[h] / 3600 * f, f *= e;
	return b
}
var nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2],
	nutArgCoeff = [-171996, -1742, 92095, 89, -13187, -16, 5736, -31, -2274, -2, 977, -5, 2062, 2, -895, 5, 1426, -34, 54, -1, 712, 1, -7, 0, -517, 12, 224, -6, -386, -4, 200, 0, -301, 0, 129, -1, 217, -5, -95, 3, -158, 0, 0, 0, 129, 1, -70, 0, 123, 0, -53, 0, 63, 0, 0, 0, 63, 1, -33, 0, -59, 0, 26, 0, -58, -1, 32, 0, -51, 0, 27, 0, 48, 0, 0, 0, 46, 0, -24, 0, -38, 0, 16, 0, -31, 0, 13, 0, 29, 0, 0, 0, 29, 0, -12, 0, 26, 0, 0, 0, -22, 0, 0, 0, 21, 0, -10, 0, 17, -1, 0, 0, 16, 0, -8, 0, -16, 1, 7, 0, -15, 0, 9, 0, -13, 0, 7, 0, -12, 0, 6, 0, 11, 0, 0, 0, -10, 0, 5, 0, -8, 0, 3, 0, 7, 0, -3, 0, -7, 0, 0, 0, -7, 0, 3, 0, -7, 0, 3, 0, 6, 0, 0, 0, 6, 0, -3, 0, 6, 0, -3, 0, -6, 0, 3, 0, -6, 0, 3, 0, 5, 0, 0, 0, -5, 0, 3, 0, -5, 0, 3, 0, -5, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0];

function nutation(d) {
	var b, e, f, h, i, l, r = (d - 2451545) / 36525,
		p = [],
		n = 0,
		s = 0;
	for (h = r * (f = r * r), p[0] = dtr(297.850363 + 445267.11148 * r - .0019142 * f + h / 189474), p[1] = dtr(357.52772 + 35999.05034 * r - 1603e-7 * f - h / 3e5), p[2] = dtr(134.96298 + 477198.867398 * r + .0086972 * f + h / 56250), p[3] = dtr(93.27191 + 483202.017538 * r - .0036825 * f + h / 327270), p[4] = dtr(125.04452 - 1934.136261 * r + .0020708 * f + h / 45e4), b = 0; 5 > b; b++) p[b] = fixangr(p[b]);
	for (i = r / 10, b = 0; 63 > b; b++) {
		for (e = l = 0; 5 > e; e++) 0 != nutArgMult[5 * b + e] && (l += nutArgMult[5 * b + e] * p[e]);
		n += (nutArgCoeff[4 * b + 0] + nutArgCoeff[4 * b + 1] * i) * Math.sin(l), s += (nutArgCoeff[4 * b + 2] + nutArgCoeff[4 * b + 3] * i) * Math.cos(l)
	}
	return [n / 36e6, s / 36e6]
}

function ecliptoeq(f, b, a) {
	var c, g;
	return c = dtr(obliqeq(f)), log += "Obliquity: " + rtd(c) + "\n", g = rtd(Math.atan2(Math.cos(c) * Math.sin(dtr(b)) - Math.tan(dtr(a)) * Math.sin(c), Math.cos(dtr(b)))), log += "RA = " + g + "\n", [g = fixangle(rtd(Math.atan2(Math.cos(c) * Math.sin(dtr(b)) - Math.tan(dtr(a)) * Math.sin(c), Math.cos(dtr(b))))), rtd(Math.asin(Math.sin(c) * Math.sin(dtr(b)) * Math.cos(dtr(a)) + Math.sin(dtr(a)) * Math.cos(c)))]
}
var deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6];

function deltat(d) {
	var b, e, f, h;
	return 1620 <= d && 2e3 >= d ? (e = (d - 1620) / 2 - (f = Math.floor((d - 1620) / 2)), b = deltaTtab[f] + (deltaTtab[f + 1] - deltaTtab[f]) * e) : (h = (d - 2e3) / 100, 948 > d ? b = 2177 + 497 * h + 44.1 * h * h : (b = 102 + 102 * h + 25.3 * h * h, 2e3 < d && 2100 > d && (b += .37 * (d - 2100)))), b
}
var EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074];

function equinox(e, b) {
	var a, f, h, i, l, n, o, r, s;
	for (1e3 > e ? (l = JDE0tab1000, s = e / 1e3) : (l = JDE0tab2000, s = (e - 2e3) / 1e3), a = 1 + .0334 * dcos(r = 35999.373 * (o = ((i = l[b][0] + l[b][1] * s + l[b][2] * s * s + l[b][3] * s * s * s + l[b][4] * s * s * s * s) - 2451545) / 36525) - 2.47) + 7e-4 * dcos(2 * r), f = h = n = 0; 24 > f; f++) n += EquinoxpTerms[h] * dcos(EquinoxpTerms[h + 1] + EquinoxpTerms[h + 2] * o), h += 3;
	return i + 1e-5 * n / a
}

function sunpos(d) {
	var b, e, f, h, i, l, n, o, r, s, t, u, A;
	return i = .016708634 + -42037e-9 * (b = (d - J2000) / JulianCentury) + -1.267e-7 * (e = b * b), n = (f = fixangle(f = 280.46646 + 36000.76983 * b + 3032e-7 * e)) + (l = (1.914602 + -.004817 * b + -14e-6 * e) * dsin(h = fixangle(h = 357.52911 + 35999.05029 * b + -1537e-7 * e)) + (.019993 - 101e-6 * b) * dsin(2 * h) + 289e-6 * dsin(3 * h)), r = 1.000001018 * (1 - i * i) / (1 + i * dcos(o = h + l)), t = n + -.00569 + -.00478 * dsin(s = 125.04 - 1934.136 * b), u = (A = obliqeq(d)) + .00256 * dcos(s), [f, h, i, l, n, o, r, t, fixangle(rtd(Math.atan2(dcos(A) * dsin(n), dcos(n)))), rtd(Math.asin(dsin(A) * dsin(n))), fixangle(rtd(Math.atan2(dcos(u) * dsin(t), dcos(t)))), rtd(Math.asin(dsin(u) * dsin(t)))]
}

function equationOfTime(d) {
	var b, e;
	return b = fixangle(280.4664567 + 360007.6982779 * (e = (d - J2000) / JulianMillennium) + .03032028 * e * e + e * e * e / 49931 + -e * e * e * e / 15300 + -e * e * e * e * e / 2e6) + -.0057183 + -sunpos(d)[10] + nutation(d)[0] * dcos(obliqeq(d) + nutation(d)[1]), (b -= 20 * Math.floor(b / 20)) / 1440
}
JDE0tab1000 = [
	[1721139.29189, 365242.1374, .06134, .00111, -71e-5],
	[1721233.25401, 365241.72562, -.05323, .00907, 25e-5],
	[1721325.70455, 365242.49558, -.11677, -.00297, 74e-5],
	[1721414.39987, 365242.88257, -.00769, -.00933, -6e-5]
], JDE0tab2000 = [
	[2451623.80984, 365242.37404, .05169, -.00411, -57e-5],
	[2451716.56767, 365241.62603, .00325, .00888, -3e-4],
	[2451810.21715, 365242.01767, -.11575, .00337, 78e-5],
	[2451900.05952, 365242.74049, -.06223, -.00823, 32e-5]
];