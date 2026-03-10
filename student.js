// ==================== STUDENT 1 ====================
let student1 = {
    name: "TUng",
    family: "Nguyen",
    age: 18,
    scores: [10, 9, 8],
    birth: {
        year: 2008,
        month: 11,
        day: 1
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getFullBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) {
            return sum += e;
        }) / this.scores.length;
    },
    getAge: function () {
        return new Date().getFullYear() - this.birth.year;
    }
};

// ==================== STUDENT 2 ====================
let student2 = {
    name: "Binh",
    family: "Hoang Duong",
    age: 20,
    scores: [8, 7, 9, 10],
    birth: {
        year: 2006,
        month: 3,
        day: 15
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getFullBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) {
            return sum += e;
        }) / this.scores.length;
    },
    getAge: function () {
        return new Date().getFullYear() - this.birth.year;
    }
};

// ==================== STUDENT 3 ====================
let student3 = {
    name: "Hoa",
    family: "Tran Thi",
    age: 19,
    scores: [7, 8, 6, 9, 8],
    birth: {
        year: 2007,
        month: 7,
        day: 22
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getFullBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) {
            return sum += e;
        }) / this.scores.length;
    },
    getAge: function () {
        return new Date().getFullYear() - this.birth.year;
    }
};

// ==================== TEST OUTPUT ====================
console.log("===== STUDENT 1 =====");
console.log("Full Name:", student1.getFullName());
console.log("Birthday:", student1.getFullBirthDay());
console.log("AVG Score:", student1.getAVGScore());
console.log("Age:", student1.getAge());

console.log("\n===== STUDENT 2 =====");
console.log("Full Name:", student2.getFullName());
console.log("Birthday:", student2.getFullBirthDay());
console.log("AVG Score:", student2.getAVGScore());
console.log("Age:", student2.getAge());

console.log("\n===== STUDENT 3 =====");
console.log("Full Name:", student3.getFullName());
console.log("Birthday:", student3.getFullBirthDay());
console.log("AVG Score:", student3.getAVGScore());
console.log("Age:", student3.getAge());

// ==================== JSON OUTPUT ====================
console.log("\n===== JSON =====");
// Tạo JSON (không bao gồm methods)
let student1JSON = {
    name: student1.name,
    family: student1.family,
    age: student1.age,
    scores: student1.scores,
    birth: student1.birth
};

let student2JSON = {
    name: student2.name,
    family: student2.family,
    age: student2.age,
    scores: student2.scores,
    birth: student2.birth
};

let student3JSON = {
    name: student3.name,
    family: student3.family,
    age: student3.age,
    scores: student3.scores,
    birth: student3.birth
};

let studentsJSON = [student1JSON, student2JSON, student3JSON];
console.log(JSON.stringify(studentsJSON, null, 2));
