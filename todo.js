#!/usr/bin/env node

const { program } = require("@caporal/core");
const fs = require("fs");
const prompt = require("prompt");
const todoFile = "todo.txt";
const indexFile = "index.txt";

let arr_lists;

program
    // List (Menampilkan list di dalam todo.txt)
    .command("list")
    .argument("","")
    .default()
    .action(({ logger }) => {
        logger.info("Todo List : ");
        fs.readFile(todoFile, "utf-8", function read(err, data) {
            if(err) {
                throw err;
            }
            let todos = [];
            todos = data.split(/\r?\n/);
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== ""  && todos[i] !== undefined) {
                    readData(JSON.parse(todos[i]));
                }
            }
        });

        function readData(data) {
            console.log(data);
        }
    })

    // Add (Menambahkan list ke dalam todo.txt)
    .command("add")
    .argument("<list>","List yang ingin dikerjakan")
    .action(({ logger, args }) => {
        const { list } = args;
        fs.readFile(indexFile, "utf-8", function read(err, data) {
            if(err) {                
                throw err;
            }
            index = parseInt(data);
            arr_lists = {
                no: index,
                todo_list: list,            
            };
            logger.info("Added to List : " + JSON.stringify(arr_lists));
            fs.appendFile(todoFile, JSON.stringify(arr_lists) + "\r\n", function(err) {
                if(err) {
                    throw err;
                }
                logger.info("Saved to " + todoFile);
            });
            index += 1;
            fs.writeFile(indexFile, index, function(err) {
                if(err) {
                    throw err;
                }
                logger.verbose("Index : " + index);
            });
        });
    })

    // Update (Mengubah nilai suatu list di todo.txt)
    .command("update")
    .argument("<no>","No list yang ingin diubah")
    .argument("<listbaru>","List baru yang ingin dikerjakan")
    .action(({ logger, args }) => {
        const { no, listbaru } = args;
        fs.readFile(todoFile, "utf-8", function read(err, data) {
            if(err) {
                throw err;
            }
            let todos = [];
            todos = data.split(/\r?\n/);
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "" && todos[i] !== undefined) {
                    todos[i] = JSON.parse(todos[i]);
                    if(todos[i].no === no) {
                        todos[i] = {
                            no: todos[i].no,
                            todo_list: listbaru,
                        }
                    }
                    todos[i] = JSON.stringify(todos[i]);
                }
            }
            let savetoFile = "";
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "") {
                    savetoFile += todos[i] + "\r\n";                
                }
            }
            fs.writeFile(todoFile, savetoFile, function(err) {
                if(err) {
                    throw err;
                }
                logger.info("List updated : \n" + savetoFile);
            });
        });
    })

    // Del (Menghapus list berdasarkan index yang dituju)
    .command("del")
    .argument("<no>","Index dari list yang ingin dihapus")
    .action(({ logger, args }) => {
        const { no } = args;
        fs.readFile(todoFile, "utf-8", function read(err, data) {
            if(err) {
                throw err;
            }
            let todos = [];
            todos = data.split(/\r?\n/);
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "") {
                    todos[i] = JSON.parse(todos[i]);
                    if(todos[i].no === no) {
                        todos[i] = undefined;
                    }
                    todos[i] = JSON.stringify(todos[i]);
                }
            }
            let savetoFile = "";
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "" && todos[i] !== undefined) {
                    savetoFile += todos[i] + "\r\n";                
                }
            }
            fs.writeFile(todoFile, savetoFile, function(err) {
                if(err) {
                    throw err;
                }
                logger.info("List updated : \n" + savetoFile);
            });
        });
    })

    // Clear (Menghapus semua list dan mereset index)
    .command("clear")
    .argument("","")
    .action(({ logger }) => {
        console.log("Are you sure want to delete? [y/n]");
        prompt.start();
        prompt.get(["answer"], function(err, result) {
            if(result.answer.toLowerCase() === "y") {
                fs.writeFile(todoFile, "", function(err) {
                    if(err) {
                        throw err;
                    }
                    logger.info("Semua list sudah terhapus");
                });
                fs.writeFile(indexFile, 1, function(err) {
                    if(err) {
                        throw err;
                    }
                    logger.verbose("Index direset menjadi : 1");
                });
            }
        });
    })

    // Done (Menandakan bahwa list telah selesai (DONE))
    .command("done")
    .argument("<no>","Index list yang ingin ditandakan sudah selesai (DONE)")
    .action(({ logger, args }) => {
        const { no } = args;
        fs.readFile(todoFile, "utf-8", function read(err, data) {
            if(err) {
                throw err;
            }
            let todos = [];
            todos = data.split(/\r?\n/);
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "" && todos[i] !== undefined) {
                    todos[i] = JSON.parse(todos[i]);
                    if(todos[i].no === no && !todos[i].todo_list.includes(" (DONE)")) {
                        todos[i] = {
                            no: todos[i].no,
                            todo_list: todos[i].todo_list + " (DONE)",
                        }
                    }
                    todos[i] = JSON.stringify(todos[i]);
                }
            }
            let savetoFile = "";
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "") {
                    savetoFile += todos[i] + "\r\n";                
                }
            }
            fs.writeFile(todoFile, savetoFile, function(err) {
                if(err) {
                    throw err;
                }
                logger.info("List updated : \n" + savetoFile);
            });
        });
    })

    // Undone (Menghapus tanda selesai (DONE) pada suatu list)
    .command("undone")
    .argument("<no>","Index list yang ingin dihapus tanda sudah selesai nya (DONE)")
    .action(({ logger, args }) => {
        const { no } = args;
        fs.readFile(todoFile, "utf-8", function read(err, data) {
            if(err) {
                throw err;
            }
            let todos = [];
            todos = data.split(/\r?\n/);
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "" && todos[i] !== undefined) {
                    todos[i] = JSON.parse(todos[i]);
                    if(todos[i].no === no) {
                        todos[i] = {
                            no: todos[i].no,
                            todo_list: todos[i].todo_list.replace(" (DONE)", ""),
                        }
                    }
                    todos[i] = JSON.stringify(todos[i]);
                }
            }
            let savetoFile = "";
            for(let i=0; i<todos.length; i++) {
                if(todos[i] !== "") {
                    savetoFile += todos[i] + "\r\n";                
                }
            }
            fs.writeFile(todoFile, savetoFile, function(err) {
                if(err) {
                    throw err;
                }
                logger.info("List updated : \n" + savetoFile);
            });
        });
    });

program.run();