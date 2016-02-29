namespace LoverOfThree
{
    using System;

    public class Program
    {
        private static void Main(string[] args)
        {
            // TODO : check why bgcoder gives only 2/100
            string rowsCols = Console.ReadLine();
            int rows = int.Parse(rowsCols.Split(' ')[0]);
            int cols = int.Parse(rowsCols.Split(' ')[1]);

            int numberOfCommands = int.Parse(Console.ReadLine());

            // Matrix filling
            int[,] matrix = new int[rows, cols];
            FillMatrix(ref matrix);
            bool[,] boolMatrix = new bool[rows, cols];
            FillBoolMatrix(ref boolMatrix);

            // PrintMatrix(matrix);
            // Moving
            int[] currentPosition = new[] { rows-1, 0 };
        int result = 0;
            for (int i = 0; i < numberOfCommands; i++)
            {
                string[] command = Console.ReadLine().Split(' ');

                for (int j = 1; j < int.Parse(command[1]); j++)
                {
                    switch (command[0].ToLower())
                    {
                        case "ul":
                        case "lu":
                            if (currentPosition[0] - 1 >= 0 && currentPosition[1] - 1 >= 0)
                            {
                                currentPosition[0] -= 1;
                                currentPosition[1] -= 1;
                            }

                            if (boolMatrix[currentPosition[0], currentPosition[1]])
                            {
                                boolMatrix[currentPosition[0], currentPosition[1]] = false;
                                result += matrix[currentPosition[0], currentPosition[1]];
                                //Console.WriteLine(result);
                            }

                            break;
                        case "ur":
                        case "ru":
                            if (currentPosition[0] - 1>= 0 && currentPosition[1] + 1 < matrix.GetLength(1))
                            {
                                currentPosition[0] -= 1;
                                currentPosition[1] += 1;
                            }

                            if (boolMatrix[currentPosition[0], currentPosition[1]])
                            {
                                boolMatrix[currentPosition[0], currentPosition[1]] = false;
                                result += matrix[currentPosition[0], currentPosition[1]];
                                //Console.WriteLine(result);

                            }

                            break;
                        case "dl":
                        case "ld":
                            if (currentPosition[0] + 1 < matrix.GetLength(1) && currentPosition[1] - 1 >= 0)
                            {
                                currentPosition[0] += 1;
                                currentPosition[1] -= 1;
                            }

                            if (boolMatrix[currentPosition[0], currentPosition[1]])
                            {
                                boolMatrix[currentPosition[0], currentPosition[1]] = false;
                                result += matrix[currentPosition[0], currentPosition[1]];
                                //Console.WriteLine(result);

                            }

                            break;
                        case "dr":
                        case "rd":
                            if (currentPosition[0] + 1 < rows && currentPosition[1] + 1 < matrix.GetLength(1))
                            {
                                currentPosition[0] += 1;
                                currentPosition[1] += 1;
                            }

                            if (boolMatrix[currentPosition[0], currentPosition[1]])
                            {
                                boolMatrix[currentPosition[0], currentPosition[1]] = false;
                                result += matrix[currentPosition[0], currentPosition[1]];
                            }

                            break;
                    }
                }
            }
            Console.WriteLine(result);

        }
        private static void FillMatrix(ref int[,] matrix)
        {
            int rows = matrix.GetLength(0);
            for (int i = matrix.GetLength(0); i > 0; i--)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i - 1, j] = j * 3 + (rows - i) * 3;
                }
            }
        }

        private static void FillBoolMatrix(ref bool[,] matrix)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i, j] = true;
                }
            }
        }

        //private static void PrintMatrix(int[,] matrix)
        //{
        //    for (int i = 0; i < matrix.GetLength(0); i++)
        //    {
        //        for (int j = 0; j < matrix.GetLength(1); j++)
        //        {
        //            Console.Write(matrix[i, j]);
        //            if (j + 1 < matrix.GetLength(1))
        //            {
        //                Console.Write(',');

        //            }
        //        }
        //        Console.WriteLine();
        //    }
        ////}

    }
}
