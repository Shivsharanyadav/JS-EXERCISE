#include<stdio.h>
void main()
{
    int mat1[3][3],mat2[3][3],i,j;
    printf("Enter the elements of first matrix\n");
    for(i=0;i<3;i++){
        for(j=0;j<3;j++)
        {
            scanf("%d",&mat1[i][j]);
        }
    }
    printf("matrix1\n");
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
        
        printf("%d",mat1[i][j]);
        }
        printf("\n");
    }
   for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            mat2[i][j] = mat1[j][i];
        }
        }
        printf("transpose of matrix \n");
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                printf("%d",mat2[i][j]);
            }   
            printf("\n");
        }



}