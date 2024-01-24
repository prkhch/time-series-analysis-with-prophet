package com.flag.article.dto;

import com.flag.article.domain.Article;
import com.flag.article.domain.DataFile;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DataFileResponse {
    private Long id;
    private String fileName;
    private String filePath;

    public DataFileResponse(DataFile dataFile) {
        this.id = dataFile.getId();
        this.fileName = dataFile.getFileName();
        this.filePath = dataFile.getFilePath();
    }
}
