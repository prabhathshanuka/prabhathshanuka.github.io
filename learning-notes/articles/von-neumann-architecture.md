# Von Neumann Architecture

> **Subject:** Computer Science  
> **Topic:** Computer Systems  
> **Curriculum:** Pearson Edexcel

## Learning objectives

By the end of this lesson, you should be able to:

- describe the purpose and main components of the Von Neumann architecture;
- explain the role of the CPU, main memory, input devices and output devices;
- identify the address bus, data bus and control bus and describe what each carries;
- explain the purpose of key CPU registers;
- describe the Fetch–Decode–Execute (FDE) cycle;
- explain the Von Neumann bottleneck.

## 1. What is the Von Neumann architecture?

The **Von Neumann architecture** is a computer system design based on the **stored-program concept**. Both program instructions and the data those instructions use are stored in the same main memory.

The processor fetches instructions from memory, decodes them and executes them. Data can also be transferred between memory, the processor and input/output devices.

The key idea is:

> **Instructions and data share the same main memory and the same buses between the CPU and memory.**

This is different from an architecture in which instructions and data are kept in separate memories with separate pathways.

## 2. Main components

A simplified Von Neumann computer system contains:

1. **Central Processing Unit (CPU)** – processes instructions and controls the operation of the computer.
2. **Main memory** – stores program instructions and data currently in use.
3. **Input devices** – provide data and instructions to the computer, such as a keyboard, mouse or sensor.
4. **Output devices** – present the results of processing, such as a monitor, printer or speaker.
5. **System buses** – provide communication pathways between the CPU, memory and input/output components.

### Simplified architecture diagram

```text
                 +---------------------------+
                 |            CPU            |
                 |                           |
                 |  +---------+  +---------+ |
                 |  | Control |  |   ALU   | |
                 |  |  Unit   |  |         | |
                 |  +---------+  +---------+ |
                 |       Registers           |
                 +-------------+-------------+
                               |
                    System buses (address,
                      data and control)
                               |
             +-----------------+-----------------+
             |                                   |
      +------+-------+                    +------+------+
      | Main memory  |                    | Input /     |
      | Instructions |                    | Output      |
      | and data     |                    | devices     |
      +--------------+                    +-------------+
```

*This is a conceptual diagram. Actual computer systems may use more complex interconnections and additional components.*

### 2.1 Central Processing Unit (CPU)

The **CPU** is often described as the brain of the computer because it processes instructions and coordinates system activities. Its main parts include:

- **Control Unit (CU):** manages and coordinates the CPU's activities. It decodes instructions and sends control signals to other components.
- **Arithmetic Logic Unit (ALU):** performs arithmetic operations, such as addition and subtraction, and logical operations, such as AND, OR and comparisons.
- **Registers:** very small, very fast storage locations inside the CPU. They temporarily hold instructions, addresses and data needed during processing.

The CPU repeatedly carries out the Fetch–Decode–Execute cycle to run a program.

### 2.2 Main memory

**Main memory** stores the instructions and data required by programs that are currently running. In the Von Neumann architecture, both are held in the same memory system.

Each memory location has an address so that the processor can identify where information is stored. The CPU uses the address bus to specify a memory location and the data bus to transfer the contents.

Main memory is commonly implemented using RAM. RAM is volatile: its contents are normally lost when power is switched off.

### 2.3 Input and output devices

- **Input devices** send data or instructions into the computer. Examples include a keyboard, mouse, microphone and temperature sensor.
- **Output devices** communicate processed information from the computer. Examples include a monitor, printer and speaker.

Input/output devices communicate with the CPU and memory through the computer's input/output interfaces and system interconnections.

## 3. System buses

A **bus** is a communication pathway that carries information between computer components. The three main system buses are the address bus, data bus and control bus.

### 3.1 Address bus

- Carries the address of the memory location or input/output location that the CPU wants to access.
- It is generally **unidirectional** from the CPU to memory or an addressed device.
- The width of the address bus determines how many different addresses can be represented.

For example, a bus with 16 address lines can represent \(2^{16}\) different addresses (65,536 addresses), assuming each address identifies one location.

### 3.2 Data bus

- Carries the actual data or instruction being transferred.
- It is **bidirectional** because information can travel to and from the CPU.
- Its width determines how many bits can be transferred at one time.

For example, a 32-bit data bus can transfer 32 bits in one transfer.

### 3.3 Control bus

- Carries control and timing signals that coordinate operations between components.
- Signals include memory read, memory write and clock-related control signals.
- Signals travel in different directions depending on their purpose; therefore, the control bus is not simply a one-way data pathway.

### Bus comparison

| Bus | What it carries | Typical direction |
|---|---|---|
| Address bus | Addresses of locations to access | CPU to memory/device |
| Data bus | Data and instructions being transferred | Bidirectional |
| Control bus | Control and timing signals | Depends on the signal |

**Remember:** Address = *where*; Data = *what*; Control = *how/when*.

## 4. CPU registers

A **register** is a small, high-speed storage location inside the CPU. Registers temporarily hold information while an instruction is being processed.

The following registers are commonly studied in the Von Neumann model.

| Register | Full name | Purpose |
|---|---|---|
| PC | Program Counter | Holds the address of the next instruction to be fetched. |
| MAR | Memory Address Register | Holds the address of the memory location currently being accessed. |
| MDR | Memory Data Register | Holds data being transferred to or from memory. It may hold an instruction fetched from memory as well. |
| CIR | Current Instruction Register | Holds the instruction currently being decoded or executed. |
| ACC | Accumulator | Stores the results of calculations and intermediate arithmetic or logic results. |

### Understanding the registers

- The **PC** tells the CPU where to find the next instruction.
- The **MAR** identifies the memory location involved in a read or write operation.
- The **MDR** temporarily holds the value being transferred between the CPU and memory.
- The **CIR** holds the instruction that the CPU is currently working on.
- The **ACC** can hold a result produced by the ALU.

**Important distinction:** The MAR stores an address; the MDR stores the data or instruction transferred. Do not confuse them.

## 5. The Fetch–Decode–Execute cycle

The **Fetch–Decode–Execute cycle** is the repeated process the CPU uses to run program instructions. The cycle has three main stages.

### Stage 1: Fetch

The CPU retrieves the next instruction from main memory.

A simplified sequence is:

1. The address of the next instruction is held in the PC.
2. The address is copied from the PC to the MAR.
3. The address is sent to memory along the address bus.
4. The CU issues a memory-read control signal.
5. The instruction is transferred from memory along the data bus into the MDR.
6. The instruction is copied from the MDR to the CIR.
7. The PC is updated so that it holds the address of the next instruction in sequence. The exact timing of this update can vary with the processor design.

### Stage 2: Decode

1. The CU examines the instruction held in the CIR.
2. It interprets the operation code (opcode) to determine what operation is required.
3. It identifies any required operands or addressing information.
4. The CU produces the control signals needed to carry out the instruction.

An **opcode** specifies the operation to perform, such as ADD, SUBTRACT or LOAD. An **operand** is the data, or a reference to the data, on which the operation is performed.

### Stage 3: Execute

1. The CPU carries out the instruction.
2. The ALU performs an arithmetic or logical operation when required. Other instructions may transfer data, access memory or change the flow of the program.
3. The result may be stored in a register such as the ACC, or written to main memory if required.
4. The CPU moves on to fetch the next instruction, and the cycle repeats.

### FDE cycle summary

```text
       +---------+
       |  FETCH  |  Retrieve the next instruction
       +----+----+
            |
            v
       +---------+
       | DECODE  |  Work out what the instruction means
       +----+----+
            |
            v
       +---------+
       | EXECUTE |  Carry out the instruction
       +----+----+
            |
            +----------> Fetch the next instruction
```

The cycle repeats while the computer is running programs. Branch and jump instructions can change the value in the PC, so the next instruction is not always at the next sequential address.

## 6. Worked example: adding two values

Imagine a program contains an instruction that tells the CPU to add two values stored in memory.

At a simplified level:

1. The CPU fetches the ADD instruction from memory.
2. The CU decodes the instruction and determines that an addition is required.
3. The CPU obtains the required values from the specified locations.
4. The ALU adds the values.
5. The result is stored in a register, such as the ACC, or transferred to memory if the instruction requires it.
6. The CPU fetches the next instruction.

For example, if the values are 25 and 4:

\[
25 + 4 = 29
\]

The result is 29. This example illustrates the processing idea; the exact instructions and register transfers depend on the processor's instruction set and design.

## 7. The Von Neumann bottleneck

The **Von Neumann bottleneck** is a performance limitation caused by instructions and data sharing the same memory and communication pathway between the CPU and main memory.

The CPU may be able to process information faster than instructions and data can be transferred between memory and the CPU. As a result, the CPU can have to wait for information to arrive.

### Why does it happen?

- Instructions and data use the same memory system.
- They share the pathway between the CPU and main memory.
- Only a limited amount of information can be transferred at a time, depending on the bus width and transfer rate.
- This can limit the overall speed of processing.

### Possible ways to reduce the effect

Modern computers use techniques such as:

- **Cache memory:** keeps frequently or recently used instructions and data close to the CPU, reducing the need to access main memory.
- **Prefetching:** retrieves instructions or data before they are needed, where possible.
- **Wider or faster buses and faster memory:** can increase the amount or rate of information transferred.

These techniques can reduce delays, but they do not change the basic stored-program idea of the traditional Von Neumann model.

## 8. Advantages and limitations

### Advantages

- **Simple design:** instructions and data can be stored in the same memory system.
- **Flexible:** a program can be changed by loading different instructions into memory.
- **Widely applicable:** the stored-program concept forms the basis of many general-purpose computer systems.

### Limitations

- **Von Neumann bottleneck:** instructions and data share the same pathway, which can restrict transfer speed.
- **Shared memory:** instructions and data compete for access to the same memory system and pathway.
- **CPU waiting time:** the processor may have to wait while instructions or data are transferred from main memory.

## 9. Von Neumann architecture and Harvard architecture

The key difference is how instructions and data are stored and accessed.

| Feature | Von Neumann architecture | Harvard architecture |
|---|---|---|
| Instruction memory | Shared with data memory | Separate from data memory |
| Data memory | Shared with instruction memory | Separate from instruction memory |
| Pathways | Instructions and data share pathways | Separate pathways can be used |
| Potential benefit | Simpler, flexible memory arrangement | Instruction fetch and data access can occur at the same time |

Some modern processors combine ideas from both designs, so real systems do not always fit perfectly into one simplified category.

## 10. Common misconceptions

- **The CPU and the computer are the same thing.** The CPU is one component of a computer system.
- **The MAR stores data.** The MAR stores a memory address; the MDR holds the data being transferred.
- **The PC stores the current instruction.** The PC holds the address of the next instruction to be fetched. The CIR holds the current instruction.
- **The ALU controls every part of the computer.** The CU coordinates operations; the ALU performs arithmetic and logical operations.
- **The data bus carries addresses.** Addresses travel on the address bus; data and instructions travel on the data bus.
- **The FDE cycle happens only once.** It repeats continuously while the CPU processes program instructions.

## 11. Exam practice

Try answering these questions without looking at the notes.

1. Define the Von Neumann architecture. (2 marks)
2. State where program instructions and data are stored in the Von Neumann architecture. (1 mark)
3. Describe the purpose of the Control Unit and the ALU. (4 marks)
4. Explain the difference between the MAR and the MDR. (2 marks)
5. State the purpose of the Program Counter. (1 mark)
6. Describe the three stages of the Fetch–Decode–Execute cycle. (6 marks)
7. Explain why the data bus is bidirectional. (2 marks)
8. Explain what is meant by the Von Neumann bottleneck. (3 marks)
9. Give one difference between Von Neumann and Harvard architectures. (2 marks)
10. Explain one way cache memory can reduce the effect of the Von Neumann bottleneck. (2 marks)

## 12. Quick revision

- The Von Neumann architecture uses the **stored-program concept**.
- **Instructions and data share the same main memory.**
- The CPU contains the **Control Unit, ALU and registers**.
- The **address bus** carries addresses; the **data bus** carries data and instructions; the **control bus** carries control signals.
- **PC:** address of the next instruction.
- **MAR:** address being accessed.
- **MDR:** data being transferred to or from memory.
- **CIR:** current instruction.
- **ACC:** stores calculation results and intermediate values.
- The CPU repeatedly performs **Fetch, Decode and Execute**.
- The **Von Neumann bottleneck** occurs because instructions and data share the same memory pathway.

---

*End of lesson note.*
